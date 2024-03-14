import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode,
  type?: "button" | "submit",
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}