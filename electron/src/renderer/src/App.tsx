import '@assets/main.css';
import {Content,RootLayout,Sidebar, Dragtopbar,ActionButtonRow, NotePreviewList} from './components'
const App=()=>{
 return (
 <>
 <Dragtopbar />
   <RootLayout>
      
      <Sidebar className='p-4 bg-neutral-900 '> 
         <ActionButtonRow className='flex justify-between mt-1'/>
         <NotePreviewList className = "mt-10 text-red-900 p-5"/>
      </Sidebar>
      <Content className=' '>Content</Content>
   </RootLayout>
   </>
)
}

export default App
