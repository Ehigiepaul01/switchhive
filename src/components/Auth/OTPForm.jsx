import { Button } from "../ui";
import { Controller, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";

export default function OTPForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    //   const { isPending, mutate } = useLogin();

    const onSubmit = (data) => {
        // mutate(data);
        console.log(data)
    };
    return (
        <>
            {
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6 otp-form">
                    <div className="flex flex-col gap-4">
                        <Controller
                            name="otp"
                            control={control}
                            render={({ field: { onChange, value, onBlur } }) =>
                                <OTPInput
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    numInputs={4}
                                    renderSeparator={<span> </span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{
                                        background: "#F8F8F8",
                                        outline: "#5A8DE5",
                                        width: "25%",
                                        height: "100px",
                                        borderRadius: "16px",
                                        color: "#000",
                                        fontSize: "36px",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                    }}
                                    containerStyle={{ display: "flex", gap: "5px" }}
                                    inputType="number"
                                />
                            }
                        />
                        <Button
                            type="submit"
                        >
                            Verify OTP
                        </Button>
                    </div>
                </form>
            }
        </>
    );
}
