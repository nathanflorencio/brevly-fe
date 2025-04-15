import type { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {
  variant?: 'empty' | 'filled'
}

function Input({ ...props }: InputProps) {
  return <input {...props} />
}

export { Input }
