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

const MixpayEdits = () => {

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
        className="w-full mt-10 flex flex-col items-stretch gap-2"
      >
        <div className="flex gap-2 relative">
          <span className="w-32">SettlementAssetID</span>
          <Input
            className={`h-[39px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="settlementAssetID"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
        <div className="flex gap-2">
          <span className="w-32">QuoteAssetID</span>
          <Input
            className={`h-[39px] px-3 py-3.5 w-[512px]`}
            type="text"
            name="QuoteAssetID"
            control={control}
            errors={errors}
            icon={"edit"}
          />
        </div>
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

export default MixpayEdits;
