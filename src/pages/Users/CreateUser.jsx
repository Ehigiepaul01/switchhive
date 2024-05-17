import { Title } from '@/components'
import { UsersBreadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { CreateUserForm } from '@/components/Users'

const CreateUser = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Create User</Title>
        <UsersBreadcrumbs menu={`Users`} subMenu={`User`} sub={`Create profile`} />
      </div>
      <CreateUserForm />
    </section>
  )
}

export default CreateUser