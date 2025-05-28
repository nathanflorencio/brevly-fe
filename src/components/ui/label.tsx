import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const label = tv({
  base: 'text-xs font-normal text-gray-500 peer-focus:font-bold peer-active:font-bold',
  variants: {
    status: {
      default: 'peer-focus:text-blue-base peer-active:text-blue-base',
      error:
        'peer-focus:text-danger peer-active:text-danger text-danger font-bold',
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

export type LabelProps = ComponentProps<'label'> &
  VariantProps<typeof label> & {
    status?: string
  }

function Label({ className, status = 'default', ...props }: LabelProps) {
  return (
    <label
      htmlFor={props.id}
      className={label({ status, className })}
      {...props}
    >
      {props.children}
    </label>
  )
}

export { Label }
