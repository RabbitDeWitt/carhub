'use client'

import { ButtonProps } from "@/types"

const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <button
      className={`${className} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
      type={type || "button"}
      onClick={() => { }}
    >
      <span className={`flex-1`}>
        {children}
      </span>
    </button>
  )
}

export default Button