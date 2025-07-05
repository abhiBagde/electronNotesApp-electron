import React, { ComponentProps } from 'react'
import {NewNoteButton, DeleteNoteButton} from './index'

export const ActionButtonRow = ({...props} : ComponentProps<'div'>) => {
  return (
    <div {...props} >
      <NewNoteButton/>
      <DeleteNoteButton />
    </div>
  )
}
