#!/usr/bin/env bash
set -e

# Download latest APX
echo "Downloading APX..."
curl -L -o apx.tar.gz "https://github.com/Vanilla-OS/apx/releases/latest/download/apx.tar.gz"
tar -xf apx.tar.gz
sudo mv apx /usr/local/bin/
rm apx.tar.gz
echo "APX installed to /usr/local/bin"

# Download Vanilla APX configs
echo "Downloading APX configs..."
curl -L -o apx-configs.zip "https://github.com/Vanilla-OS/vanilla-apx-configs/archive/refs/heads/main.zip"
unzip -q apx-configs.zip
sudo mkdir -p /usr/local/share/apx
sudo cp -r vanilla-apx-configs-main/stacks /usr/local/share/apx/
sudo cp -r vanilla-apx-configs-main/package-managers /usr/local/share/apx/
rm -rf apx-configs.zip vanilla-apx-configs-main
echo "APX configs installed to /usr/local/share/apx"

# Check if podman is installed
if ! command -v podman &> /dev/null; then
    echo "Podman not found. Attempting to install..."
    if [ -f /etc/debian_version ]; then
        sudo apt update && sudo apt install -y podman
    elif [ -f /etc/arch-release ]; then
        sudo pacman -Sy --noconfirm podman
    elif [ -f /etc/redhat-release ]; then
        sudo dnf install -y podman
    else
        echo "Unsupported distro. Install podman manually."
        exit 1
    fi
else
    echo "Podman is already installed."
fi

# Check /etc/subuid and /etc/subgid
if ! grep -q "^$USER:" /etc/subuid; then
    echo "$USER:100000:65536" | sudo tee -a /etc/subuid
fi

if ! grep -q "^$USER:" /etc/subgid; then
    echo "$USER:100000:65536" | sudo tee -a /etc/subgid
fi

# Check for flatpak-session-helper or flatpak
if ! command -v flatpak-session-helper &> /dev/null; then
    if ! command -v flatpak &> /dev/null; then
        echo "Installing flatpak..."
        if [ -f /etc/debian_version ]; then
            sudo apt update && sudo apt install -y flatpak
        elif [ -f /etc/arch-release ]; then
            sudo pacman -Sy --noconfirm flatpak
        elif [ -f /etc/redhat-release ]; then
            sudo dnf install -y flatpak
        else
            echo "Unsupported distro. Install flatpak manually."
            exit 1
        fi
    else
        echo "Flatpak already installed."
    fi
else
    echo "flatpak-session-helper is already installed."
fi

echo "Installation complete."
