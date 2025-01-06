import SignIn from './login/signin.js'
import SignUp from './login/signup.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './notes/main.js'
import Note from './notes/note.js'
function App(){
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/main",
      element:<Main/>
    },
    {
      path:"/note",
      element:<Note/>
    }
    ])
  return(
    
    <RouterProvider router={router}/>
    
  )
}
export default App;