import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}