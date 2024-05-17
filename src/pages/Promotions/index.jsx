import { PromotionHeader, PromotionIconsHeader, PromotionsCards } from "@/components/Promotions"

const Promotions = () => {
    return (
        <section className="section">
            <PromotionHeader />
            <div>
                <PromotionIconsHeader />
            </div>
            <PromotionsCards />
        </section>
    )
}
export default Promotions