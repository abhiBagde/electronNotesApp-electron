import { Actionbutton, ActionbuttonProps } from "./actionbutton"
import{FaRegTrashCan} from 'react-icons/fa6'
export const DeleteNoteButton = ({...props}:ActionbuttonProps) => {
  return (
    <Actionbutton {...props}><FaRegTrashCan className="h-4 w-4 text-zinc-400"/></Actionbutton>
  )}
