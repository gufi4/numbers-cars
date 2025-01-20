import { createBrowserRouter,   RouterProvider } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import CollectionPage from './Pages/CollectionPage/CollectionPage'
import Layout from './Layout/Layout'
import RangeOfNumbersPage from './Pages/RangeOfNumbersPage/RangeOfNumbersPage.jsx'

// const tg = window.Telegram.WebApp;

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/collection/:id',
        element: <CollectionPage/>,
      },
      {
        path: '/item/:id/:numberName',
        element: <RangeOfNumbersPage/>,
      },

    ]
  }
])

function App() {
  // const onClose = () => {
  //   alert('close');
  //   // tg.close();
  // }

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
