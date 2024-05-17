import React from 'react'

const Editinput = ({className, type, icon, placeholder}) => {
  return (
    <>
    <div className="rounded-md  border border-slate-200 h-10 bg-white px-3 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ">
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id='edit'
        />
        <label htmlFor="edit">
        <img src={icon} alt="" className="inline"/>
        </label>
    </div>
  </>
  )
}

export default Editinput


