import { NoteContent, NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadNote = async () => {
  const notes = await window.context.getNotes()
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNote())
export const NotesAtom = unwrap(notesAtomAsync, (prev) => prev)
export const SelectedNotesIndexAtom = atom<number | null>(null)
const SelectedNotesAtomAsync = atom(async (get) => {
  const notes = get(NotesAtom)
  const SelectedNoteIndex = get(SelectedNotesIndexAtom)
  if (SelectedNoteIndex === null || !notes) return null

  const SelectedNote = notes[SelectedNoteIndex]

  const noteContent = await window.context.readNote(SelectedNote.title)
  return {
    ...SelectedNote,
    content: noteContent
  }
})

export const SelectedNotesAtom = unwrap(
  SelectedNotesAtomAsync,
  (prev) =>
    prev ?? {
      title: '',
      content: '',
      lastEditTime: Date.now()
    }
)

export const saveNoteAtom = atom(null, async (get, set, newContent: NoteContent) => {
  const notes = get(NotesAtom)
  const SelectedNote = get(SelectedNotesAtom)
  if (!SelectedNote || !notes) return

  await window.context.writeNote(SelectedNote.title, newContent)
  set(
    NotesAtom,
    notes.map((note) => {
      if (note.title === SelectedNote.title) {
        return {
          ...note,
          lastEditTime: Date.now()
        }
      }
      return note
    })
  )
})
export const CreateEmptyNoteAtom = atom(null, async (get, set) => {
  const notes = get(NotesAtom)
  if (!notes) return

  const title = await window.context.createNote()

  if (!title) return
  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }
  set(NotesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

  set(SelectedNotesIndexAtom, 0)
})

export const DeleteNoteAtom = atom(null, async (get, set) => {
  const notes = get(NotesAtom)
  const SelectedNote = get(SelectedNotesAtom)

  if (!SelectedNote || !notes) return
  const isDeleted = await window.context.deleteNote(SelectedNote.title)

  if(!isDeleted) return
  set(
    NotesAtom,
    notes.filter((note) => note.title !== SelectedNote.title)
  )
  set(SelectedNotesIndexAtom, null)
})
