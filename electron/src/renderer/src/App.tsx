import '@assets/main.css';
import {Content,RootLayout,Sidebar, Dragtopbar,ActionButtonRow, NotePreviewList, MarkdownEditor, FloatingNoteTitle} from './components'
const App=()=>{
 return (
 <>
 <Dragtopbar />
   <RootLayout>

      <Sidebar className='p-4 bg-neutral-900 '> 
         <ActionButtonRow className='flex justify-between mb-5 mt-1'/>
         <NotePreviewList className = ""/>
      </Sidebar>
          <Content className='border-l'>
             <FloatingNoteTitle className='pt-2'/>
         <MarkdownEditor />
      </Content>
   </RootLayout>
   </>
)
}

export default App
