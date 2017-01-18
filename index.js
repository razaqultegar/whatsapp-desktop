// Script dasar pemanggil fungsi electron
const path = require('path')
const electron = require('electron')
const {app, BrowserWindow} = electron

// Membuat Tampilan
app.on('ready', () => {
  let win = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 1057,
    height: 840,
    show: false,
    icon: path.join(__dirname, 'assets/app-icon/png/512.png')
  })
  // Menghilangkan Whitescreen
  win.once('ready-to-show', () => {
    win.show()
  })
  // Membuat Load URL
  win.loadURL('https://web.whatsapp.com')
})
