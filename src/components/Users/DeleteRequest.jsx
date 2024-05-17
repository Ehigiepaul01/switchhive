import React from 'react'
import UserEditInput from './UserEditInput'
import { CustomSelect } from '../custom'
import { Button } from '../ui'
import { trash } from '@/assets/icons'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const DeleteRequest = () => {
    return (
        <div>
            <h6 className="text-xl font-medium text-black">New Deletion Task</h6>
            <div className='flex flex-col gap-2 mt-6 mb-14'>
                <UserEditInput label="Login ID" value="123456" />
                <UserEditInput label="User Name" value="123456" />
                <div>
                    <p className="mb-1 text-sm font-light leading-tight text-neutral-400">Are you sure?</p>
                    <CustomSelect options={['Yes', 'No']} defaultValue='Yes' name={`delete-confirm`} className="w-full text-base font-light border rounded-lg border-zinc-400 text-stone-950" />
                </div>
                <div className='flex items-center gap-2'>
                    <ExclamationTriangleIcon className="h-[18px] w-[18px] text-red-600 rounded"/>
                    <p className="text-red-600 text-base font-medium font-['Poppins'] leading-normal">Warning</p>
                </div>
                <p className="text-neutral-400 text-xs font-normal font-['Poppins'] leading-[18px]">There is no Roll back of this deletion possible. If you are absolutely sure to do this, then select “ YES” into the inpit</p>
                <div className="flex items-center gap-4 mt-12">
                    <Button variant="destructive">
                        <img src={trash} alt="trash" className="mr-2 h-[18px] w-[18px]" />
                        Delete Account
                    </Button>
                    <Button variant="grey" className="w-[198px]">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteRequest