
import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
    return (
        <div className='grid grid-cols-12 gap-5 pt-16'>
            <div className='col-span-3 border-r-2 min-h-screen bg-amber-200'>
                <p className=' text-center bg-red-500 rounded-lg py-3'>Side navigation</p>
                <div className='flex flex-col px-20 space-y-4 '>
                    <Link href="/dashboard/add-story">Add Story</Link>
                    <Link href="/dashboard/profile">My Profile</Link>
                    <Link href="/dashboard/settings">Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    )
}
