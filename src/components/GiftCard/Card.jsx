import { gift_card } from '@/assets/images'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { CustomPopover } from '../custom'
import { RemoveCard, EditCard, ViewCard } from '.'

const Card = ({ data }) => {
  return (
    <div className='p-2 bg-white border-2 rounded-lg border-neutral-200 mt-10'>
      <img src={gift_card} alt="gift card" />
      <div className="flex justify-between items-center mt-2">
        <CustomPopover icon={<DotsVerticalIcon className="h-[18px] w-[18px]" />} style={`p-1 rounded-full text-white bg-stone-300`}>
          <ViewCard data={data}/>
          <EditCard data={data}/>
          <RemoveCard {...data}/>
        </CustomPopover>
        <p className="px-3 py-1 rounded-[100px] text-center text-blue-900 text-xs font-light border border-blue-900">{data.currency}</p>
      </div>
    </div>
  )
}

export default Card