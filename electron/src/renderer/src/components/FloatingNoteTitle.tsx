import { SelectedNotesAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const SelectedNote = useAtomValue(SelectedNotesAtom)

  if (!SelectedNote) return null
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{SelectedNote.title}</span>
    </div>
  )
}
