import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { NotesMock } from './mocks'
export const NotesAtom = atom<NoteInfo[]>(NotesMock)
export const SelectedNotesIndexAtom = atom<number | null>(null)
export const SelectedNotesAtom = atom((get) => {
  const notes = get(NotesAtom)
  const SelectedNoteIndex = get(SelectedNotesIndexAtom)
  if (SelectedNoteIndex === null) return null

  const SelectedNote = notes[SelectedNoteIndex]
  return {
    ...SelectedNote,
    content: `Hello from Note ${SelectedNoteIndex}`
  }
})

export const CreateEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  const title = `Note ${notes.length + 1}`
  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }
  set(NotesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

  set(SelectedNotesIndexAtom, 0)
})

export const DeleteNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  const SelectedNote = get(SelectedNotesAtom)

  if (!SelectedNote) return

  set(
    NotesAtom,
    notes.filter((note) => note.title !== SelectedNote.title)
  )
  set(SelectedNotesIndexAtom, null)
})
