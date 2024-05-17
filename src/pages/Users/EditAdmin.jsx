import { Title } from '@/components'
import { EditAdminForm } from '@/components/Users'
import { PageBreadcrumb } from '@/components/custom';

const breadcrumbItems = [
  { to: "/users", label: "Users" },
  { to: "/users/admin-management", label: "Admin Management" },
  { label: "Edit profile" }
];

const EditAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Edit Admin Information</Title>
        <PageBreadcrumb items={breadcrumbItems} />
      </div>
      <EditAdminForm />
    </section>
  )
}

export default EditAdmin