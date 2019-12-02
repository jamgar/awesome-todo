import { app, isMac } from "electron";
import { mainWindow } from "./electron-main";

export const menuTemplate = [
  // { role: 'appMenu' }
  ...(process.platform === "darwin"
    ? [
        {
          label: app.getName(),
          submenu: [
            { role: "about" },
            {
              label: "Settings",
              accelerator: "CmdOrCtrl+,",
              click() {
                // this will send a message to the quasar app
                mainWindow.webContents.send("show-settings");
              }
            },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" }
          ]
        }
      ]
    : []),
  // { role: 'fileMenu' }
  {
    // TODO: Clean up the File menu to test for darwin
    // Not able to find info on isMac. One electron readme
    // shows const isMac = process.platform === 'darwin'
    label: "File",
    submenu: [
      ...(isMac
        ? { role: "close" }
        : [
            {
              label: "Settings",
              accelerator: "CmdOrCtrl+,",
              click() {
                // this will send a message to the quasar app
                mainWindow.webContents.send("show-settings");
              }
            },
            { type: "separator" },
            { role: "quit" }
          ])
    ]
  },
  // { role: 'editMenu' }
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      ...(isMac
        ? [
            { role: "pasteAndMatchStyle" },
            { role: "delete" },
            { role: "selectAll" },
            { type: "separator" },
            {
              label: "Speech",
              submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
            }
          ]
        : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...(isMac
        ? [
            { type: "separator" },
            { role: "front" },
            { type: "separator" },
            { role: "window" }
          ]
        : [{ role: "close" }])
    ]
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click() {
          require("electron").shell.openExternalSync("https://electronjs.org");
        }
      }
    ]
  }
];
