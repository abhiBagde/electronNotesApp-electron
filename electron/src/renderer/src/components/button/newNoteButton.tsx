import React from 'react'
import { Actionbutton, ActionbuttonProps } from './actionbutton'
import {LuNotebookPen } from 'react-icons/lu'
export const NewNoteButton = ({...props}:ActionbuttonProps) => {
  return (
    <Actionbutton {...props}><LuNotebookPen  className='w-4 h-4 text-zinc-400'/></Actionbutton>
  )
}

