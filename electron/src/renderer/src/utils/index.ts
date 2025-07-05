import clsx,{ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

const DateFormatter = new Intl.DateTimeFormat('en-US',{
    dateStyle:'short',
    timeStyle:'short',
    timeZone:'UTC'
})

export const FormatDateFromMs = (ms:number) => DateFormatter.format(ms)
export const cn=(...args: ClassValue[]) =>{
    return twMerge(clsx(...args))
}