import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { loginSchema } from "@/schemas/authSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from "@/api/auth";

export default function SigninForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { isPending, mutate } = useLogin();

    const onSubmit = (data) => {
        mutate(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6">
                <div className="flex flex-col gap-2">
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
                        label="Password"
                        name="password"
                        placeholder="password"
                        control={control}
                        errors={errors}
                        type="password"
                    />
                    <Button
                        isLoading={isPending}
                        type="submit"
                    >
                        Login
                    </Button>
                </div>
            </form>
        </>
    );
}
