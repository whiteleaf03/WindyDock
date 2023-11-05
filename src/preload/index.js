import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronApi', {
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  },
  dropFile: filePath => ipcRenderer.send('dropFile', filePath)
})
