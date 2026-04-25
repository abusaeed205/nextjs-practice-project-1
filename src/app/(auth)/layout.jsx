import Tittle from '@/Components/Tittle'
import React from 'react'

export default function Authlayout({children}) {
  return (
    <div className='flex min-h-screen gap-5'>
      <div className='flex-2'>{children}</div>
      <div className='flex-1 bg-amber-800 px-5 flex items-center justify-center'>
        <Tittle>Welcome to the Auth Page</Tittle>
      </div>
    </div>
  )
}
