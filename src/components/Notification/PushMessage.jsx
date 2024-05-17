import React from 'react'
import { Input } from '../ui'

const PushMessage = () => {
  return (
    <div>
        <h1 className='leading-[24px] pb-3 font-[500]'>Message</h1>
        <label htmlFor="" className='flex flex-col gap-2 text-[#0C0903] text-[14px] font-[300]'>Title
        <Input className=''/>
        </label>

        <label htmlFor="" className='flex flex-col gap-2 pt-3 text-[#0C0903] text-[14px] font-[300]'>Message
        <Input className=''/>
        </label>
        <p className='text-[#A1A1A1] italic '>Approx. Display abe characters ; 80-300 chatacters</p>
    </div>
  )
}

export default PushMessage