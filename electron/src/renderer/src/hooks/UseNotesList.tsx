import { NotesAtom, SelectedNotesIndexAtom } from "@renderer/store"
import { useAtom, useAtomValue } from "jotai"

export const UseNotesList = ({ onSelect }: { onSelect?: () => void}) => {
    const notes = useAtomValue(NotesAtom)
    const [selectedNotesIndex, setSelectedNotesIndex] = useAtom(SelectedNotesIndexAtom)
    const handleNotesSelect = (index: number) => async() => {
        setSelectedNotesIndex(index)

        if (onSelect) {
            onSelect()
        }
    }

    return {
        notes,
        selectedNotesIndex,
        handleNotesSelect
    }
}