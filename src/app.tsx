import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { RouterProvider } from 'react-router/dom'
import { router } from '@/routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Toaster
          richColors
          closeButton
          visibleToasts={3}
          toastOptions={{
            style: {
              fontSize: 16,
            },
          }}
        /> */}

      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="left" />
    </QueryClientProvider>
  )
}
