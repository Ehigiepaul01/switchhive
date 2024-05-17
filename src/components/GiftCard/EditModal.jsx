import { gift_card } from '@/assets/images';
import EditInput from './EditInput';
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import Input from '../inputs/input';
import { Button } from '../ui';

const EditModal = ({ name, currency, minPrice, maxPrice, fixedPrice }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <EditInput title={`Name of Gift card`} text={name} control={control} />
        <EditInput title={`Currency`} text={currency} control={control} />
        <EditInput title={`Minimum Price`} text={`$${minPrice}`} control={control} />
        <EditInput title={`Maximum Price`} text={`$${maxPrice}`} control={control} />
        <EditInput title={`Fixed Price`} text={`$${fixedPrice}`} control={control} />
      </div>
      <Input
        name={`image-${name}`}
        type="file"
        control={control}
        errors={errors}
        className="text-base font-semibold leading-normal text-blue-900 px-[50px] py-[23px] h-auto w-full mb-6 hidden"
        label="Select or Drop a file"
      />
      <Button className="w-full">
        Save
        <BookmarkFilledIcon className="h-[18px] w-[18px] text-white rounded ml-2" />
      </Button>
    </form>
  )
}

export default EditModal