import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '../custom/confirmAction'
import { CrossCircledIcon } from '@radix-ui/react-icons'


const DeclineReviewButton = ({ data }) => {
    const onRemove = () => {

    };

    const onCancel = () => {
    };

    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button size="icon" variant="grey" onClick={onOpen}>
                <CrossCircledIcon className='w-[18px] h-[18px] text-blue-900' />
            </Button>
            <ConfirmAction
                isOpen={isOpen}
                onContinue={onRemove}
                onClose={onClose}
                onCancel={onCancel}
                isLoading={false}
                message="Are you sure you want to Decline?"
            />
        </>
    )
}

export default DeclineReviewButton