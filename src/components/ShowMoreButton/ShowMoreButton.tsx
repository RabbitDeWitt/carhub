'use client'

import { ShowMoreButtonProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../Button/Button'
import { updateSearchParamsByFuelAndYear } from '@/utils'

const ShowMoreButton = ({ page, hasNextPage }: ShowMoreButtonProps) => {
  const router = useRouter()
  const handleNavigation = () => {
    const newLimit = (page + 1) * 10
    const params = updateSearchParamsByFuelAndYear('limit', `${newLimit}`)
    router.push(params)
  }

  return (
    <div className='w-full flex justify-center items-center gap-5 mt-10 '>
      {!hasNextPage && (
        <Button
          className='bg-primary-blue rounded-full text-white'
          onClick={handleNavigation}
        >
          Show more
        </Button>
      )}
    </div>
  )
}

export default ShowMoreButton