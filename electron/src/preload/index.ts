import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(process.contextIsolated){
  throw new Error("ContextIsolation must be enabled in browser windows"
  )
}
try{
  contextBridge.exposeInMainWorld('context',{

  })
}catch(error){
  console.error(error)
}