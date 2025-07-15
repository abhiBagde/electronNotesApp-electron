import {ComponentProps} from 'react'
import { NotesMock } from '@renderer/store/mocks'
import { NotePreview } from '../components/NotePreview'
import { twMerge } from 'tailwind-merge'
import { UseNotesList } from '@renderer/hooks/UseNotesList'
export const NotePreviewList = ({className,...props}: ComponentProps<'ul'> ) => {
  const {notes,selectedNotesIndex, handleNotesSelect} = UseNotesList({})
  if(notes.length  === 0 ){
    return <ul className={twMerge("text-center pt-4",className)} {...props}>
      <span> No Note's yet</span>
    </ul>
  }
  return <ul {...props}>
      {NotesMock.map((note,index) =>(
        <NotePreview key={note.title + note.lastEditTime}
          isActive={selectedNotesIndex === index}
        onClick={handleNotesSelect(index)}
          {...note} />
        
      ))}
    </ul>
}

