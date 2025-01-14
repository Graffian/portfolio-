import Portfolio from "./portfolio.js"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Skill from './skills.js'
import Contact from './contact.js'
function App(){
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Portfolio/>
    },
    {
      path:"/skills",
      element:<Skill/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
    ])
  return(
    
    <RouterProvider router={router}/>
    
  )
}
export default App;