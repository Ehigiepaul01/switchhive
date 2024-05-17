import { Title } from "@/components";
import { Breadcrumbs } from "@/components";

const CMSHeader = () => {
  return (
    <div>
      <Title>Content Management System</Title>
      <Breadcrumbs menu="CMS" subMenu="Webise Contents" />
    </div>
  )
}

export default CMSHeader

export const ProductReviewsHeader = () => {
  return (
    <div>
      <Title>Content Management System</Title>
      <Breadcrumbs menu="CMS" subMenu="Product Reviews" />
    </div>
  )
}

export const BlockchainIconsHeader = () => {
  return (
    <div>
      <Title>Content Management System</Title>
      <Breadcrumbs menu="CMS" subMenu="Blockchain Icon" />
    </div>
  )
}
