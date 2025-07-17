import { appDirectoryName, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { promises as fs } from 'fs'
import { ensureDir, readdir } from 'fs-extra'
import { homedir } from 'os'
import type { GetNotes} from '@shared/'
export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}
const dir = GetNote
export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding
    // withFileType: false
  })

  const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await fs.stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
