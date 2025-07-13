# Google Meet Mute Toggle Chrome Extension

## Overview
This Chrome extension allows you to toggle your microphone mute/unmute status in Google Meet using a global keyboard shortcut.

## Features
- Toggle Google Meet microphone mute/unmute with a global keyboard shortcut.
- Customizable shortcut key by the user.

## Installation

1.  Clone or download this repository.
    ```bash
    git clone https://github.com/simeji/google-meet-mute-toggle-extension.git
    ```
2.  Open your Chrome browser and type `chrome://extensions` in the address bar, then press Enter.
3.  Turn on "Developer mode" in the top right corner.
4.  Click the "Load unpacked" button.
5.  Select the directory of the cloned or downloaded repository (`google-meet-mute-toggle-extension`).

## Setting up the Shortcut Key

1.  On the `chrome://extensions` page, click the menu icon (three horizontal lines) in the top left and select "Keyboard shortcuts".
2.  Find the "Google Meet Mute Toggle" entry.
3.  Click the pencil icon next to the "Toggle mute in Google Meet" shortcut and set your preferred shortcut key.
4.  By setting the shortcut scope to "Global", it will function even when Chrome is not the active window.

## Usage
During a Google Meet call, press the configured shortcut key to toggle your microphone mute/unmute status.

## Tech Stack
- JavaScript
- Chrome Extensions API (Manifest V3)