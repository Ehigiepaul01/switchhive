import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";

export default function ForgetPasswordForm() {
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
                            className={`h-[39px] px-3 py-3.5`}
                            label="Email Address"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            control={control}
                            errors={errors}
                        />
                        <Button
                            type="submit"
                        >
                            Send OTP
                        </Button>
                    </div>
                </form>
            }
        </>
    );
}
