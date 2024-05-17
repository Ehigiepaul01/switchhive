import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { MixerHorizontalIcon, PlusIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

const UsersHeader = () => {
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
            <div className='flex items-center gap-3 ml-auto'>
                {/* <Button asChild>
                    <Link to="/users/create">
                        <PlusIcon className="mr-2 h-[18px] w-[18px]" />
                        Add new user
                    </Link>
                </Button> */}
                <Button>By Country</Button>
                <Button>By User Type</Button>
                <Button variant="outline">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter
                </Button>
            </div>
        </div>
    )
}

export default UsersHeader