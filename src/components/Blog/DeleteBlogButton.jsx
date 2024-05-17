import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import ConfirmAction from '../custom/confirmAction'
import { useDeleteBlogs } from "@/api/blog";
import { bin } from "@/assets/icons";

const DeleteBlogButton = ({ id }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isPending,
        mutate: Delete,
    } = useDeleteBlogs(onClose);

    const onRemove = (blogId) => {
        Delete(blogId);
    };

    const onCancel = () => {
        onClose();
    };
    return (
        <>
            <Button size="icon" variant="grey" onClick={onOpen} disabled={isPending}>
                <img src={bin} alt="trash" />
            </Button>
            <ConfirmAction
                isOpen={isOpen}
                onContinue={() => onRemove(id)}
                onClose={onClose}
                onCancel={onCancel}
                isLoading={isPending}
                message="Are you sure you want to delete"
            />
        </>
    )
}

export default DeleteBlogButton