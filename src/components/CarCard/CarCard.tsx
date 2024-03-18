"use client"

import { useState } from "react"
import { CarCardProps } from "@/types"
import Image from "next/image"
import Button from "../Button/Button"
import { calculateCarRent } from "@/utils"

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    drive,
    make,
    model,
    transmission,
    year
  } = car


  const [isOpen, setIsOpen] = useState<boolean>(false)
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="Tire"
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="Gas"
            />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            className="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            onClick={() => setIsOpen(true)}
            icon="/right-arrow.svg"
          >
            View more
          </Button>
        </div>

      </div>



    </div>
  )
}

export default CarCard