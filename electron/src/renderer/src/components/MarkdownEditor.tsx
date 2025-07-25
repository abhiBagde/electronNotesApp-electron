import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { UseMarkdownEditor } from '@renderer/hooks/UseMarkdownEditor'

export const MarkdownEditor = () => {
  const { SelectedNote } = UseMarkdownEditor()

  if (!SelectedNote) return null
  return (
    <MDXEditor
      key={SelectedNote.title}
      markdown={SelectedNote.content}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName='outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[""] prose-code:after:content-[""]  '
    />
  )
}
