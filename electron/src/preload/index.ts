import { contextBridge, ipcRenderer } from 'electron'
import { GetNotes } from '@shared/types'

if (process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in browser windows')
}
try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes : (...args:Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (error) {
  console.error(error)
}
