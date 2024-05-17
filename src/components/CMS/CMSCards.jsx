import { cmsCards } from "@/constants/data"
import Card from "./CMSCard"

const CMSCards = () => { 
  return (
    <div className="grid gap-6 mt-3 text-base text-stone-950 sm:grid-cols-3 md:grid-cols-4">
        {
            cmsCards.map((card, index) => (
                <Card key={index} data={card} />
            ))
        }
    </div>
  )
}

export default CMSCards