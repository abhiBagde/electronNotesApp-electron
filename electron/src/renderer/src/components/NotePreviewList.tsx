import { UseNotesList } from '@renderer/hooks/UseNotesList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from '../components/NotePreview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNotesIndex, handleNotesSelect } = UseNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <li>
          <span>No Notes yet</span>
        </li>
      </ul>
    )
  }

  return (
    <ul className={twMerge(className)} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNotesIndex === index}
          onClick={() => handleNotesSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
