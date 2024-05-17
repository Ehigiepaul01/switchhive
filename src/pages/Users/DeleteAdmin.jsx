import { Title } from '@/components'
import { DeleteRequest } from '@/components/Users'
import { UsersBreadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'

const DeleteAdmin = () => {
  return (
    <section className='section'>
      <div className='mb-8'>
        <Title>Delete Request</Title>
        <UsersBreadcrumbs menu={`Users`} subMenu={`Admin Management`} sub={`Delete profile`} />
      </div>
      <DeleteRequest />
    </section>
  )
}

export default DeleteAdmin