import { Button } from '@/components/ui';
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '@/components/custom/confirmAction'
import { useDeleteAdminRole, useDeleteUsers } from "@/api/user";
import { bin } from "@/assets/icons";

const DeleteRoleButton = ({ id }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isPending,
        mutate: Delete,
    } = useDeleteAdminRole(onClose, id);

    const onRemove = () => {
        Delete();
    };

    const onCancel = () => {
        onClose();
    };
    return (
        <>
            <Button size="icon" variant="grey" onClick={onOpen} disabled={isPending} type="button">
                <img src={bin} alt="trash" />
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

export default DeleteRoleButton