import Input from "../inputs/input"

const EditInput = ({title, text, control}) => {
    return (
        <div>
            <p className='text-neutral-400 text-sm font-light leading-tight'>{title}</p>
            <Input
                placeholder={`Add ${title}`}
                name={`title-${title}`}
                control={control}
                text={text}
                className="mt-0 px-4 py-[14px] text-zinc-500 text-base font-light h-10"
            />
        </div>
    )
}
export default EditInput