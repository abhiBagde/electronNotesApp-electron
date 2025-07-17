import { SelectedNotesAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
export const UseMarkdownEditor = () => {
  const SelectedNote = useAtomValue(SelectedNotesAtom)

  return {
    SelectedNote
  }
}
