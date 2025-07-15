import { NoteInfo } from "@shared/models"
import { atom } from "jotai"
import { NotesMock } from "./mocks"
export const NotesAtom = atom<NoteInfo[]>(NotesMock)
export const SelectedNotesIndexAtom = atom<number | null>(null)
export const SelectedNotesAtom = atom((get) => {
    const notes = get(NotesAtom)
    const SelectedNoteIndex = get(SelectedNotesIndexAtom)
    if (!SelectedNoteIndex) return null
    
    const SelectedNote = [SelectedNoteIndex]
    return {
        ...SelectedNote,
        content:`Hello from Note ${SelectedNoteIndex}`
    }
})
