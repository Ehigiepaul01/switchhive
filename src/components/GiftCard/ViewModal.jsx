import { gift_card } from '@/assets/images';
import ViewInput from './ViewInput';

const ViewModal = ({ name, currency, minPrice, maxPrice, fixedPrice }) => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                <ViewInput title={`Name of Gift card`} text={name} />
                <ViewInput title={`Currency`} text={currency} />
                <ViewInput title={`Minimum Price`} text={`$${minPrice}`} />
                <ViewInput title={`Maximum Price`} text={`$${maxPrice}`} />
                <ViewInput title={`Fixed Price`} text={`$${fixedPrice}`} />
            </div>
            <div className='mt-8'>
                <img src={gift_card} alt="Gift Card" className='w-full object-cover object-centre h-20' />
            </div>
        </>
    )
}

export default ViewModal