import React, { ReactNode } from 'react'

import NavBar from '@/components/navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full'>
      <NavBar />
      <main className='h-full flex w-full flex-col'
        style={{
          paddingTop: `${NAVBAR_HEIGHT}px`
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default LandingLayout