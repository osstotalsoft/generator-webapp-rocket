import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'components/App'
import routes from './config'

export default function Root() {
  const router = createBrowserRouter([{ element: <App />, children: routes }])

  return <RouterProvider router={router} />
}
