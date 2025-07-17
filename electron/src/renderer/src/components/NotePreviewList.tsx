import { UseNotesList } from '@renderer/hooks/UseNotesList'
import { NotesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from '../components/NotePreview'
export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}
export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNotesIndex, handleNotesSelect } = UseNotesList({ onSelect })
  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span> No Notes yet</span>
      </ul>
    )
  }
  return (
    <ul {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNotesIndex === index}
          onClick={handleNotesSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
