import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '../custom/confirmAction'

const RemoveCard = () => {
    const onRemove = () => {

    };

    const onCancel = () => {
        onClose();
    };

    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm hover:text-white hover:bg-blue-900" onClick={onOpen}>Remove</Button>
            <ConfirmAction
                isOpen={isOpen}
                onContinue={onRemove}
                onClose={onClose}
                onCancel={onCancel}
                isLoading={false}
                message="Are you sure you want to delete"
            />
        </>
    )
}

export default RemoveCard