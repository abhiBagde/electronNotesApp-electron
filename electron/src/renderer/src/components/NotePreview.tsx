import { ComponentProps } from 'react'
import { NoteInfo } from '@shared/models'
import { twMerge } from 'tailwind-merge'
import {cn, FormatDateFromMs} from '@renderer/utils'
export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>
export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = FormatDateFromMs(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        { 'bg-zinc-500': isActive, 'hover:bg-zinc-700': !isActive },
        className
      )}
      {...props}
    >
      <h3 className="font-bold truncate p-0 leading-tight">{title}</h3>
      <span className='text-xs font-light text-left'>{date}</span>
    </div>
  )
}
