import { Button } from '@/components/ui';
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '@/components/custom/confirmAction'
import { useDeleteUsers } from "@/api/user";
import { trash } from '@/assets/icons';

const DeleteUserButton = ({ id }) => {
    const {
        isPending,
        mutate: Delete,
        isSuccess,
    } = useDeleteUsers(id);

    const onRemove = () => {
        Delete();
        if (isSuccess) {
            onClose();
        }
    };

    const onCancel = () => {
        onClose();
    };
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button variant="destructive" onClick={onOpen} disabled={isPending} type="button">
                <img src={trash} alt="trash" className="mr-2 h-[18px] w-[18px]" />
                Delete Account
            </Button>
            <ConfirmAction
                isOpen={isOpen}
                onContinue={() => onRemove()}
                onClose={onClose}
                onCancel={onCancel}
                isLoading={isPending}
                message="Are you sure you want to delete"
            />
        </>
    )
}

export default DeleteUserButton