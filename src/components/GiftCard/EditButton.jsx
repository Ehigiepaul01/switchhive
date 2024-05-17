
import { Modal } from '../custom';
import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import EditModal from './EditModal';

const EditCard = ({ data }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm hover:text-white hover:bg-blue-900" onClick={onOpen}>Edit</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                message="Edit Gift card"
            >
                <EditModal {...data} />
            </Modal>
        </>
    )
}

export default EditCard