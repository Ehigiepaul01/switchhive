import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { menuItems } from "@/constants/data";
import CreateRoles from "./CreateRoles";
import EditRoles from "./EditRoles";
import { edit } from "@/assets/icons";
import { useGetAdminRoles, useInviteAdmin } from "@/api/user";
import { useState } from "react";
import DeleteRoleButton from "./DeleteRoleButton";

const CreateAdminForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm();

    const [isEditMode, setIsEditMode] = useState(false);
    const [roleID, setRoleID] = useState(null);

    const handleEditClick = (roleId) => {
        setIsEditMode(true);
        setRoleID(roleId);        
    };

    const handleCheckboxChange = (roleId) => {
        const formValues = getValues();
        const isChecked = formValues.roleId

        // If the checkbox is checked, set roleID to roleId
        // If it's already roleId, uncheck the checkbox, hence set roleID to null
        setRoleID(isChecked ? roleId : null);
    };

    const { data: roles, isLoading: isRoleLoading, isError: isRoleError } = useGetAdminRoles();

    const {
        isPending,
        mutate,
    } = useInviteAdmin(reset);
        
    const onSubmit = (data) => {
        const formData = { ...data, roleId: roleID };
        mutate(formData);
    };

    return (
        <div>
            <h6 className="text-xl font-medium text-black">Personal Information</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 mt-6 mb-8 gap-x-12 gap-y-4'>
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Email Address"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Phone Number"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div className="mb-4">
                    <h6 className="text-black text-xl font-medium leading-[30px] mb-6">Roles</h6>
                    {isRoleLoading && <div>Loading</div>}
                    {isRoleError && <div>Error fetching data</div>}
                    {!isRoleLoading && !isRoleError && (!roles || roles.length < 1) && (
                        <div>No Admin Found</div>
                    )}
                    {/* Render AdminsTable if data is available */}
                    {!isRoleLoading && !isRoleError && roles && roles.length > 0 && (
                        roles.map((role) => (
                            <div className="flex items-center gap-20" key={role.id}>
                                <div onClick={() => handleCheckboxChange(role.id)}>
                                    <Input
                                        key={role.id}
                                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                                        label={role.name}
                                        className={`text-left w-6 accent-blue-900 h-6`}
                                        type="checkbox"
                                        control={control}
                                        errors={errors}
                                        name="roleId"
                                    />
                                </div>
                                <div>
                                    <Button size="icon" variant="ghost" className="mr-2" onClick={() => handleEditClick(role.id)} type="button">
                                        <img src={edit} alt="edit" />
                                    </Button>
                                    <DeleteRoleButton id={role.id} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <Button variant="outline" className="w-[198px] my-10" disabled={isPending}>
                    { isPending ? "Creating" : "Save" }
                    <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded " />
                </Button>
            </form>
            {!isEditMode && <CreateRoles menuItems={menuItems} />}
            {isEditMode && <EditRoles roleId={roleID} menuItems={menuItems} />}
        </div>
    )
}

export default CreateAdminForm