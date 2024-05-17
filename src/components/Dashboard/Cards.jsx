import { dashboardCardData } from "@/constants/data"
import Card from "./Card"

const Cards = () => {
  return (
    <div className='grid grid-cols-4 my-11 gap-3'>
        {
            dashboardCardData.map((card, index) => (
                <Card key={index} {...card} />
            ))
        }
    </div>
  )
}

export default Cards