# <img src="assets/app-icon/png/512.png" width="40" align="left">Whatsapp Desktop

> Unofficial Whatsapp Desktop

[![](dist/img/screenshot.png)](https://github.com/razaqultegar/whatsapp-desktop/releases/latest)

## How to Install

```sh
# Clone the Quick Start repository
$ git clone https://github.com/razaqultegar/whatsapp-desktop.git

# Go into the repository
$ cd whatsapp-desktop

# Install the dependencies and run
$ npm install && npm start
```
## Linux Shortcut

Create a file in `~/.local/share/applications/` called `Whatsapp.desktop` with the following contents:

```
[Desktop Entry]
Name=Whatsapp
Exec=/path/to/Whatsapp
Terminal=false
Type=Application
Icon=/path/to/Whatsapp/resources/app/assets/app-icon/png/icon.png
```

Replace all instances of `/path/to` with the actual path of the Whatsapp.

## Development

> Made with [Electron](http://electron.atom.io).

## License

MIT © [Razaqul Tegar]
