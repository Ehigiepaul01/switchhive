import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { loginSchema } from "@/schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/api/auth";
import edit from "@/assets/icons/edit.svg"
import AddCommissionModal from "./AddCommissionModal";
import useDisclosure from "@/hooks/useDisclosure";

const DepayEdits = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();

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
    <div className="mt-10 flex flex-col items-start">
      <Button className="ml-auto" onClick={onOpen}>Add Commissions</Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col items-stretch gap-2 w-4/6"
      >
        <p className="font-medium">Currency</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 relative">
            <Input
              className={`h-[32px] px-3 py-3.5 w-20`}
              type="text"
              name="quoteCurrency"
              control={control}
              errors={errors}
              icon={"edit"}
            />
            <span className="text-gray-500 text-sm font-light">Quote Currency</span>
          </div>
          <div className="flex items-center gap-2 relative">
            <Input
              className={`h-[32px] px-3 py-3.5 w-20`}
              type="text"
              name="localCurrency"
              control={control}
              errors={errors}
              icon={"edit"}
            />
            <span className="text-gray-500 text-sm font-light">Enforce displayed local currency</span>
          </div>
        </div>
        <div className="flex gap-2 relative">
          <span className="w-32 font-medium">API key</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="apiKey"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>


        <p className="font-medium ml-80">Accept</p>
        <div className="flex gap-2 relative">
          <span className="w-32 text-gray-500 text-sm">Blockchain</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="blockchain"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
        <div className="flex gap-2 relative">
          <span className="w-32 text-gray-500 text-sm">Token</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="token"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
        <div className="flex gap-2 relative">
          <span className="w-32 text-gray-500 text-sm">Receiver</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="receiver"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>

        <p className="font-medium ml-80">Fee</p>
        <div className="flex gap-2 relative">
          <span className="w-32 text-gray-500 text-sm">Amount</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="amount"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
        <div className="flex gap-2 relative">
          <span className="w-32 text-gray-500 text-sm">Receiver</span>
          <Input
            className={`h-[32px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="receiver"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
        <Input
          className={`h-[32px] px-3 py-3.5 min-h-64`}
          type="text"
          name="whitelist"
          control={control}
          errors={errors}
          icon={"edit"}
          textField={true}
          labelStyle={`text-base font-medium leading-tight mb-2 mt-0`}
          label="Whitelist"
        />
        <Input
          className={`h-[32px] px-3 py-3.5 min-h-64`}
          type="text"
          name="blacklist"
          control={control}
          errors={errors}
          icon={"edit"}
          textField={true}
          labelStyle={`text-base font-medium leading-tight mb-2 mt-0`}
          label="Blacklist"
        />
        <Button
          variant="outline"
          className="w-[198px] mt-10"
          type="submit"
          isLoading={isPending}
        >
          Save
          <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded" />
        </Button>
      </form>
      <AddCommissionModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default DepayEdits;
