import { Title } from '@/components'
import { CreateAdminForm } from '@/components/Users'
import { PageBreadcrumb } from '@/components/custom';

const breadcrumbItems = [
  { to: "/users", label: "Users" },
  { to: "/users/admin-management", label: "Admin Management" },
  { label: "Create profile" }
];

const CreateAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Create Admin Information</Title>
        <PageBreadcrumb items={breadcrumbItems} />
      </div>
      <CreateAdminForm />
    </section>
  )
}

export default CreateAdmin