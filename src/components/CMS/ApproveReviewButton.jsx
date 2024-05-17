
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Modal } from '../custom';
import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'


const ApproveReviewButton = ({ data }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button size="icon" variant="grey" onClick={onOpen}>
                <CheckCircledIcon className='w-[18px] h-[18px] text-blue-900' />
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                message="View Review"
            >
                <p>dddddddddddddd</p>
            </Modal>
        </>
    )
}

export default ApproveReviewButton