import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'components/App'
import routes from './config'

export default function Root() {
  const router = createBrowserRouter([{ element: <App />, children: routes }], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  })

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true
      }}
    />
  )
}
