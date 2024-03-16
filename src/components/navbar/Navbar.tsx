import Link from "next/link"
import Image from "next/image"

import Button from "../Button/Button"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href='/'
          className="flex justify-between items-center"
        >
          <Image
            src='/logo.svg'
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button className="text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-primary-blue hover:text-white transition duration-300">
          Sign In
        </Button>
      </nav>
    </header>
  )
}

export default Navbar