import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";

export default function ResetPasswordForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    //   const { isPending, mutate } = useLogin();

    const onSubmit = (data) => {
        // mutate(data);
    };
    return (
        <>
            {
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6">
                    <div className="flex flex-col gap-4">
                        <Input
                            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                            className={`h-10 px-3 py-3.5`}
                            label="Password"
                            name="password"
                            placeholder="Password"
                            control={control}
                            errors={errors}
                            type="password"
                        />
                        <Input
                            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                            className={`h-10 px-3 py-3.5`}
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            control={control}
                            errors={errors}
                            type="password"
                        />
                        <Button
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            }
        </>
    );
}

