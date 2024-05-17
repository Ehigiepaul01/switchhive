import { gift_card } from '@/assets/images'
import { ToggleInput } from '..'

const Card = ({ data }) => {
  return (
    <div className='p-2 mt-10 bg-white border-2 rounded-lg border-neutral-200'>
      <img src={gift_card} alt="gift card" />
      <div className="flex items-center mt-2">
        <ToggleInput id={data.id} />
        <p className="px-3 py-1 rounded-[100px] text-center text-blue-900 text-xs font-light border border-blue-900 ml-auto">{data.currency}</p>
      </div>
    </div>
  )
}

export default Card