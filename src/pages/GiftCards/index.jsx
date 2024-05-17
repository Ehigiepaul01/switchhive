import { GiftCardHeader, GiftCards } from "@/components/GiftCard";
import { Title } from "@/components";

const GiftCard = () => {
  return (
    <section className="section">
      <Title>Switchive Gift card</Title>
      <GiftCardHeader />
      <GiftCards />
    </section>
  )
}

export default GiftCard