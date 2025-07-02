import {ComponentProps} from 'react'
import { twMerge } from 'tailwind-merge'
export type ActionbuttonProps = ComponentProps<'button'>
export const Actionbutton = ({className,children,...props }: ActionbuttonProps) => {
  return (
    <button className={twMerge('px-2 py-1 rounded-md border border-zinc-50  hover:bg-zinc-600 transition-colors duration-100',className)}{...props}>{children}</button>
  )
}
