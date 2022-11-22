import{createBrowserRouter} from 'react-router-dom'

import Home from  "./pages/Home"


import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
 
 {
    path:'*',
    element:<Error/>
  }
])


// eslint-disable-next-line import/prefer-default-export
export{router};

