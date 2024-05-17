import React from 'react'

const ViewInput = ({title, text}) => {
    return (
        <div className='border-b border-neutral-200 pb-2'>
            <p className='text-neutral-400 text-sm font-light leading-tight'>{title}</p>
            <p className='text-stone-950 text-base font-light'>{text}</p>
        </div>
    )
}

export default ViewInput
