import { useState } from "react"
import Editinput from "../inputs/editinput"
import { Button } from "../ui";
import { CopyIcon } from "@radix-ui/react-icons";

const CreatePromotionForm = () => {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <form className="pt-4">
            <div className="pb-4">
                <label htmlFor="title" className="font-semibold text-base mb-2">Title</label>
                <Editinput
                    placeholder={"Add a title"}
                    id="title"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block font-semibold text-base mb-2">Description</label>
                <textarea
                    id="description"
                    className="resize-none border rounded-md w-full py-2 px-8 text-stone-500 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    placeholder="Type text here..."
                    value={description}
                    onChange={handleChange}
                >
                </textarea>
            </div>
            <div className="pb-4">
                <label htmlFor="addUrl" className="font-semibold text-base mb-2">Add URL</label>
                <Editinput
                    placeholder={"Add URL here..."}
                    id="addUrl"
                />
            </div>
            <div>
                <h2 className="font-semibold text-base mb-2">Choose Country</h2>
                <div className="text-neutral-400 text-base font-light px-6 py-3.5 bg-white rounded-lg border border-neutral-200 w-full flex justify-between">
                    <Button size="sm">Add</Button>
                </div>
                <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">Countries the promotion will be visible to</p>
            </div>
            <div className="pt-3 w-96">
                <h2 className="font-semibold text-base mb-2">Add image</h2>
                <div className="flex gap-3 items-center text-neutral-400 text-base font-light px-6 py-3 bg-white rounded-lg border border-neutral-200 w-full">
                    <Button size="sm">Choose</Button>
                    <h3 className="font-bold text-blue-900 text-sm">No file choosen</h3>
                </div>
            </div>
            <div className="pt-8 flex justify-between w-1/2">
                <Button variant="outline" size="sm" className="px-20 flex gap-2">
                    Save
                    <CopyIcon className="h-[18px] w-[18px]" />
                </Button>
                <Button variant="darkerGrey" size="sm" className="px-20">Cancel</Button>
            </div>
        </form>
    )
}
export default CreatePromotionForm