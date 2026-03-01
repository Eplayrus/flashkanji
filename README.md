# FlashKanji MVP (Kivy/KivyMD)

## Install
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install kivy kivymd
```

## Run
```bash
python main.py
```

## Android (buildozer)
```bash
pip install buildozer cython
sudo apt update
sudo apt install -y git zip unzip openjdk-17-jdk autoconf libtool pkg-config zlib1g-dev libncurses5-dev libncursesw5-dev libtinfo5 cmake libffi-dev libssl-dev
buildozer android debug
buildozer android deploy run
```

`buildozer.spec` already included in repo.

## iOS (kivy-ios, macOS only)
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install kivy-ios cython
toolchain build python3 kivy kivymd
toolchain create flashkanji .
toolchain xcode flashkanji
```
Open Xcode project, choose signing team/device, then Build & Run.
