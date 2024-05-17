import { Modal } from '../custom';
import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import ViewModal from './ViewModal';

const ViewCard = ({data}) => {
  const onRemove = () => {

  };

  const onCancel = () => {
  };

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm hover:text-white hover:bg-blue-900" onClick={onOpen}>View</Button>
      <Modal
        isOpen={isOpen}
        onContinue={onRemove}
        onClose={onClose}
        onCancel={onCancel}
        isLoading={false}
        message="View Gift card"
      >
        <ViewModal {...data}/>
      </Modal>
    </>
  )
}

export default ViewCard