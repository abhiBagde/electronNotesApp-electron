import '@assets/main.css'
import { useRef } from 'react'
import {
  ActionButtonRow,
  Content,
  Dragtopbar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from './components'
const App = () => {
  const ContentContainerRef = useRef<HTMLDivElement>(null)

  function resetScroll() {
    ContentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <Dragtopbar />
      <RootLayout>
        <Sidebar className="p-4 bg-neutral-900 ">
          <ActionButtonRow className="flex justify-between mb-5 mt-1" />
          <NotePreviewList className="" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={ContentContainerRef} className="border-l">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
