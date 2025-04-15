import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/pages/_layouts/app'
import { RouterError } from '@/pages/error'
import { Home } from '@/pages/app/home'
import { Redirect } from '@/pages/app/redirect'
import { NotFound } from '@/pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:shortUrl', element: <Redirect /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
