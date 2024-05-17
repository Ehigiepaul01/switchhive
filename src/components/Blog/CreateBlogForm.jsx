import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useCreateBlogs } from "@/api/blog";
import { Link } from "react-router-dom";

const CreateBlogForm = () => {

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      content: '',
      imageUrl: ''
    }
  });

  const {
    isPending,
    mutate,
  } = useCreateBlogs(reset);

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Post Title"
          placeholder="Add a title"
          name="title"
          control={control}
          errors={errors}
        />
        <Input
          textField={true}
          label="Blog Description"
          placeholder="Add text here"
          name="content"
          control={control}
          errors={errors}
        />
        <Input
          label="Add Image"
          name="imageUrl"
          type="file"
          register={register}
          errors={errors}
          className="text-base font-semibold leading-normal text-blue-900 px-[50px] py-[23px] h-auto w-auto file:invisible file-upload"
        />
        <div className="flex items-center gap-4 mt-24">
          <Button variant="outline" className="w-[198px]" type="submit" disabled={isPending}>
            {isPending ? "Posting" : "Save"}
            <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded" />
          </Button>
          <Button variant="grey" className="w-[198px]" asChild>
            <Link to="/blog">Cancel</Link>
          </Button>
        </div>
      </form>

    </div>
  );
};

export default CreateBlogForm;
