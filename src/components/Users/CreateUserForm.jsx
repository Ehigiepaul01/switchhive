import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useCreateUsers } from "@/api/user";

const CreateUserForm = () => {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      country: ""
    }
  });

  const {
    isPending,
    mutate,
  } = useCreateUsers(reset);

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-6 mb-8">

          <Input
            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
            className={`h-[39px] px-3 py-3.5`}
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            control={control}
            errors={errors}
          />
          <Input
            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
            className={`h-[39px] px-3 py-3.5`}
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            control={control}
            errors={errors}
          />
          <Input
            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
            className={`h-[39px] px-3 py-3.5`}
            label="Full Name"
            placeholder="Last Name, First Name"
            name="fullName"
            control={control}
            errors={errors}
          />
          <Input
            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
            className={`h-[39px] px-3 py-3.5`}
            label="Country"
            placeholder="Country"
            name="country"
            control={control}
            errors={errors}
          />
        </div>
        <div className="flex items-center gap-4 mt-24">
          <Button variant="outline" className="w-[198px]" type="submit" disabled={isPending}>
            {isPending ? 'Creating...' : 'Create User'}
            <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded" />
          </Button>
          <Button variant="grey" className="w-[198px]" asChild>
            <Link to="/users">Cancel</Link>
          </Button>
        </div>
      </form>

    </div>
  );
};

export default CreateUserForm;
