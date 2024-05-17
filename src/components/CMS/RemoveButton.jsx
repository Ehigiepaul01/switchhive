import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '../custom/confirmAction'
import { bin } from "@/assets/icons";

const RemoveButton = () => {
    const onRemove = () => {

    };

    const onCancel = () => {
        onClose();
    };

    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button size="icon" variant="grey" onClick={onOpen}>
                <img src={bin} alt="trash" />
            </Button>
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

export default RemoveButton