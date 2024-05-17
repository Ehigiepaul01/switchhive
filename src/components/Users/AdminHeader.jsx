import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { PlusIcon } from '@radix-ui/react-icons'
import Title from '../Title'
import { Link } from 'react-router-dom'
import { PageBreadcrumb } from '../custom'


const AdminHeader = ({ title }) => {
    
    const breadcrumbItems = [
        { to: "/users", label: "Users" },
        { to: "/users/admin-management", label: "Admin Management" },
        { label: title == 'adminProfiles' ? 'Admin Profiles' : 'Permissions' }
    ];
    
    return (
        <div>
            <div className='mb-5'>
                <Title>Admin Management</Title>
                <PageBreadcrumb items={breadcrumbItems} />
            </div>
            <div className='flex items-center justify-between my-2'>
                <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
                <Button asChild>
                    <Link to="/users/admin-management/create">
                        <PlusIcon className="mr-2 h-[18px] w-[18px]" />
                        Add new Admin
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default AdminHeader