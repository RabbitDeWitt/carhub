import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode,
  type?: "button" | "submit",
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void
}

export interface CustomFilterProps {
  title: string
}