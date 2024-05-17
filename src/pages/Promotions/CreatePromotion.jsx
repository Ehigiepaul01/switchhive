import { Breadcrumbs, Title } from "@/components"
import { CreatePromotionForm } from "@/components/Promotions"

const CreatePromotion = () => {
    return (
        <section className="section">
            <Title>Create Promotion</Title>
            <Breadcrumbs menu="Promotion" subMenu="Create Promotion" />
            <CreatePromotionForm />
        </section>
    )
}
export default CreatePromotion