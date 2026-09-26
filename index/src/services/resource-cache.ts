/** Session-local data cache: share both in-flight work and successfully parsed JSON.
 * Rejected requests are evicted so offline/retry does not poison the session.
 */
export function createResourceCache<T>() {
  const requests = new Map<string, Promise<T>>();
  return {
    get(key: string, load: () => Promise<T>): Promise<T> {
      const existing = requests.get(key);
      if (existing) return existing;
      const pending = load().catch((error: unknown) => {
        if (requests.get(key) === pending) requests.delete(key);
        throw error;
      });
      requests.set(key, pending);
      return pending;
    },
    delete(key: string) { requests.delete(key); }
  };
}
