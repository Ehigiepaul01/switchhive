import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import RoleCheckbox from "./RoleCheckbox";
import { Link } from "react-router-dom";
import { useEditRoles } from "@/api/user";

const EditRoles = ({ roleId, menuItems }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({});

    const {
        isPending,
        mutate,
    } = useEditRoles(reset, roleId);

    const onSubmit = (data) => {
        const selectedRoleObjKey = Object.keys(data).filter(key => data[key])
        const formdata = {
            permissions: selectedRoleObjKey,
        };
        mutate(formdata);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h6 className="text-black text-xl font-medium leading-[30px]  mb-6">
                Edit Role
            </h6>
            <h6 className="text-black text-xl font-medium leading-[30px]  mb-6 mt-2">
                Access to
            </h6>
            {menuItems.map((menuItem) => (
                <div key={menuItem.label} className="mb-4">
                    <RoleCheckbox
                        menuItem={menuItem}
                        control={control}
                        errors={errors}
                    />
                </div>
            ))}
            <div className="flex items-center gap-4 mt-10">
                <Button variant="outline" className="w-[198px]" disabled={isPending}>
                    {isPending ? "Editing Role" : "Save"}
                    <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded " />
                </Button>
                <Button variant="grey" className="w-[198px]">
                    <Link to={`/users/admin-management`}>Cancel</Link>
                </Button>
            </div>
        </form>
    );
};

export default EditRoles;
