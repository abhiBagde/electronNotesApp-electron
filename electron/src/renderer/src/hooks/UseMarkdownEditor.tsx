import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, SelectedNotesAtom } from '@renderer/store'
import { autoSavingTime } from '@shared/constants'
import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash'
import { useRef } from 'react'
import { NoteContent } from '@shared/models'
export const UseMarkdownEditor = () => {
  const SelectedNote = useAtomValue(SelectedNotesAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSave = throttle(
    async (content: NoteContent) => {
      if (!SelectedNote) return
      console.info(`Auto Saving Note : `, SelectedNote.title)
      await saveNote(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!SelectedNote) return
    handleAutoSave.cancel()

    const content = editorRef.current?.getMarkdown()

    if(content != null) {
      await saveNote(content)
    }
  }
  return {
    SelectedNote,
    editorRef,
    handleAutoSave,
    handleBlur
  }
}
