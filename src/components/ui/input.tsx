import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'peer rounded-lg border p-4 font-normal placeholder:text-gray-400',
  variants: {
    status: {
      default: 'focus:border-blue-base active:border-blue-base border-gray-300',
      error: 'border-danger focus:border-danger active:border-danger',
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    status?: string
    value?: string | number
  }

function Input({ className, status, ...props }: InputProps) {
  return <input className={input({ status, className })} {...props} />
}

export { Input }
