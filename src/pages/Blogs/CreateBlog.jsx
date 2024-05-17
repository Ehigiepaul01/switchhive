import { Breadcrumbs, Title } from "@/components";
import { CreateBlogForm } from "@/components/Blog";

const CreateBlog = () => {
  return (
    <section className="section">
        <Title>Create Blog</Title>
        <Breadcrumbs menu={'Blog'} subMenu={'Create Blog'} />
        <CreateBlogForm />
    </section>
  )
}

export default CreateBlog