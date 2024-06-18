
import { app, BrowserWindow } from 'electron';
import path from 'path';

const mainURL = path.resolve('./src/render/index.html');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true
  });

  win.loadFile(mainURL);

}

app.whenReady().then(() => {
  createWindow();
});