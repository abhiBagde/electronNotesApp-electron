import { CreateEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuNotebookPen } from 'react-icons/lu'
import { Actionbutton, ActionbuttonProps } from './actionbutton'
export const NewNoteButton = ({ ...props }: ActionbuttonProps) => {
  const CreateEmptyNote = useSetAtom(CreateEmptyNoteAtom)

  const HandleCreation = () => {
    CreateEmptyNote()
  }
  return (
    <Actionbutton onClick={HandleCreation} {...props}>
      <LuNotebookPen className="w-4 h-4 text-zinc-400" />
    </Actionbutton>
  )
}
