import { giftCards } from "@/constants/data"
import Card from "./Card"

const GiftCards = () => { 
  return (
    <div className="grid gap-6 mt-3 text-base text-stone-950 sm:grid-cols-3 md:grid-cols-4">
        {
            giftCards.map((card, index) => (
                <Card key={index} data={card} />
            ))
        }
    </div>
  )
}

export default GiftCards