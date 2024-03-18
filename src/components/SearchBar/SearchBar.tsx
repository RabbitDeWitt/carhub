"use client"
import { useState } from "react"
import SearchManufacturer from "../SearchManufacturer/SearchManufacturer"
import { fetchCars, updateSearchParams } from "@/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchButton = ({ className }: { className: string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 ${className}`}
  >
    <Image
      src="/magnifying-glass.svg"
      alt="Magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)


const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please fill in the search bar')
    }

    router.push(updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase()))
  }

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          alt="Car Model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  )
}

export default SearchBar