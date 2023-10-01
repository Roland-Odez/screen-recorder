import RouteLayout from './components/RouteLayout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AllVideos, Home, Land, Login } from './pages'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/'>
        <Route path='/' element={<RouteLayout />} >
          <Route index element={<Home />} />
          <Route path='/home' element={<Land />} />
          <Route path='/all' element={<AllVideos />} />
        </Route>
        <Route path='/Login' element={<Login />} />
      </Route>
    </>
  )
)

function App() {

  return <RouterProvider router={router} />

}

export default App