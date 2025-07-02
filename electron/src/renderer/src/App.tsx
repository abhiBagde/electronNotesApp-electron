import '@assets/main.css';
import {Content,RootLayout,Sidebar, Dragtopbar,ActionButtonRow} from './components'
const App=()=>{
 return (
 <>
 <Dragtopbar />
   <RootLayout>
      
      <Sidebar className='p-4 bg-neutral-900 '> 
         <ActionButtonRow className='flex justify-between'/>
      </Sidebar>
      <Content className=' bg-neutral-800'>Content</Content>
   </RootLayout>
   </>
)
}

export default App
