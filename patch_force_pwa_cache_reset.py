import os
import re

# Path to the script.js file within the project
SCRIPT_PATH = os.path.join('index', 'script.js')

NEW_CONSTANT = '\n      // Guard key for one-time forced PWA cache reset.\n      // When set to \"done\", the app will skip resetting caches on subsequent loads.\n      const FORCE_PWA_CACHE_RESET_FLAG = "flashKanji.forcePwaCacheReset.v1";\n'

NEW_FUNCTION = '''\n      /**\n       * Force resetting PWA caches and reloading the page.\n       * This helper will delete all caches and instruct service workers\n       * to reset their internal caches. It only runs once per user based on\n       * the FORCE_PWA_CACHE_RESET_FLAG. After running it reloads\n       * the page so new parameters take effect.\n       */\n      async function forcePwaCacheResetIfNeeded() {\n        try {\n          const done = localStorage.getItem(FORCE_PWA_CACHE_RESET_FLAG);\n          if (done === 'done') return false;\n          // Mark as done to avoid repeated resets\n          localStorage.setItem(FORCE_PWA_CACHE_RESET_FLAG, 'done');\n          // Clear all caches via the Cache Storage API\n          if ('caches' in window) {\n            const keys = await caches.keys();\n            await Promise.all(keys.map((key) => caches.delete(key)));\n          }\n          // Notify service workers to reset their internal caches and update them\n          if ('serviceWorker' in navigator) {\n            const registrations = await navigator.serviceWorker.getRegistrations();\n            await Promise.all(registrations.map(async (registration) => {\n              try {\n                if (registration.active) {\n                  // Post the same message the service worker listens for to trigger cache clearing\n                  registration.active.postMessage('FLASH_KANJI_FORCE_CACHE_RESET');\n                }\n              } catch (_) {\n                /* ignore */\n              }\n              // Request the worker to update itself\n              await registration.update().catch(() => null);\n            }));\n          }\n          // Reload the page to apply updates\n          location.reload();\n          return true;\n        } catch (error) {\n          console.warn('Force cache reset failed.', error);\n          return false;\n        }\n      }\n\n'''

def main():
    if not os.path.exists(SCRIPT_PATH):
        raise FileNotFoundError(f"Cannot find {SCRIPT_PATH} to patch")

    # Read current content
    with open(SCRIPT_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if patch already applied
    if 'FORCE_PWA_CACHE_RESET_FLAG' in content:
        print('Patch already applied. No changes made.')
        return

    # Create backup
    backup_path = SCRIPT_PATH + '.bak'
    if not os.path.exists(backup_path):
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Backup created at {backup_path}')

    # Insert new constant after PWA_CACHE_RESET_STORAGE_KEY definition
    const_pattern = r'(const\s+PWA_CACHE_RESET_STORAGE_KEY\s*=\s*\"[^\"]*\";)'
    match = re.search(const_pattern, content)
    if not match:
        raise RuntimeError('Could not find PWA_CACHE_RESET_STORAGE_KEY definition to insert new constant.')
    insert_index = match.end()
    content = content[:insert_index] + NEW_CONSTANT + content[insert_index:]

    # Insert new function before async function loadCourse()
    load_course_pattern = r'async\s+function\s+loadCourse\s*\('
    m2 = re.search(load_course_pattern, content)
    if not m2:
        raise RuntimeError('Could not find async function loadCourse to insert new function.')
    insert_index2 = m2.start()
    content = content[:insert_index2] + NEW_FUNCTION + content[insert_index2:]

    # Replace the refreshStaleAppCache call with our call preceding it
    refresh_call_pattern = r'(if\s*\(\s*await\s+refreshStaleAppCache\s*\(\s*\)\s*\)\s*return;)'
    def replace_refresh(match_obj):
        original_line = match_obj.group(1)
        indentation = re.match(r'\s*', original_line).group(0)
        new_line = f"{indentation}if (await forcePwaCacheResetIfNeeded()) return;\n{indentation}{original_line}"
        return new_line

    content, num_subs = re.subn(refresh_call_pattern, replace_refresh, content, count=1)
    if num_subs == 0:
        raise RuntimeError('Could not find refreshStaleAppCache call to modify.')

    # Write modified content back
    with open(SCRIPT_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Patch applied successfully.')

if __name__ == '__main__':
    main()
