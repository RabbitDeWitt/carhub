import React, { MouseEventHandler } from "react";

export type Car = {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number,
}


export interface ButtonProps {
  children: React.ReactNode,
  type?: "button" | "submit",
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  icon?: string,
  disabled?: boolean
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void
}

export interface CustomFilterProps {
  title: string
}

export interface CarCardProps {
  car: Car
}

export interface CarDetailsProps {
  open: boolean,
  close: () => void,
  car: Car
}