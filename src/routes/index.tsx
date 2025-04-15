import { createBrowserRouter } from 'react-router'

import { Home } from '@/pages/app/home'
import { Redirect } from '@/pages/app/redirect'
import { NotFound } from '@/pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:shortUrl',
    element: <Redirect />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
