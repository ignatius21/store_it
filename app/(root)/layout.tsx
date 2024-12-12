import Header from '@/components/Header'
import MobileNavigation from '@/components/MobileNavigation'
import Sidebar from '@/components/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({children}:{children: React.ReactNode}) => {
  const currentUser = await getCurrentUser()
  if(!currentUser) return redirect('/sign-in')
  return (
    <main className='flex h-screen'>
        <Sidebar {...currentUser}/>
        <section className='flex flex-1 h-full flex-col'>
            <MobileNavigation {...currentUser}/>
            <Header userId={currentUser.$id} accountId={currentUser.accountId}/>
            <div>{children}</div>
        </section>
        <Toaster/>
    </main>
  )
}

export default layout