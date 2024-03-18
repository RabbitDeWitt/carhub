'use client'

import { ButtonProps } from "@/types"
import Image from "next/image"

const Button = ({ children, className, type, icon, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
      type={type || "button"}
      onClick={onClick}
    >
      <span className={`flex-1`}>
        {children}
      </span>

      {icon && (
        <div className="relative">
          <Image
            src={icon}
            width={24}
            height={24}
            className="object-contain"
            alt="Icon"
          />
        </div>
      )}
    </button>
  )
}

export default Button