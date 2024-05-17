const UserEditInput = ({ label, value }) => (
    <div className="flex-col justify-start items-start flex w-full">
      <p className="text-neutral-400 text-sm font-light leading-tight mb-2">{label}</p>
      <div className="text-neutral-400 text-base font-light px-3 py-3.5 bg-white rounded-lg border border-zinc-400 w-full">{value}</div>
    </div>
);

export default UserEditInput;