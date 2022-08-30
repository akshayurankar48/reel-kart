import React from 'react'
import Header from './Header'
import ErrorCard from './ErrorCard';


function Error() {
  return (
<div className=''>
    <Header/>
    <div className='w-screen h-screen flex items-center justify-center'>
    <ErrorCard/>
    </div>
</div>
  )
}

export default Error


