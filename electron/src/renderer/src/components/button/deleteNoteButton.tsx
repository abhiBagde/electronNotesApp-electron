import { DeleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'
import { Actionbutton, ActionbuttonProps } from './actionbutton'
export const DeleteNoteButton = ({ ...props }: ActionbuttonProps) => {
  const DeleteNote = useSetAtom(DeleteNoteAtom)

  const HandleDelete = () => {
    DeleteNote()
  }
  return (
    <Actionbutton onClick={HandleDelete} {...props}>
      <FaRegTrashCan className="h-4 w-4 text-zinc-400" />
    </Actionbutton>
  )
}
