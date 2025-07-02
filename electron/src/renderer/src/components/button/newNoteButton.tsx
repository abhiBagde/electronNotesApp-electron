import React from 'react'
import { Actionbutton, ActionbuttonProps } from './actionbutton'
import {LuSignature} from 'react-icons/lu'
export const NewNoteButton = ({...props}:ActionbuttonProps) => {
  return (
    <Actionbutton {...props}><LuSignature className='w-4 h-4 text-zinc-400'/></Actionbutton>
  )
}

