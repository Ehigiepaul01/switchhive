const UserViewInput = ({ label, value }) => (
  <div className="flex-col justify-start items-start flex">
    <div className="flex-col justify-start items-start gap-[5px] flex border-b border-b-neutral-200 pb-2.5 mb-2.5 w-full">
      <div className="text-neutral-400 text-sm font-light leading-tight">{label}</div>
      <div className="text-stone-950 text-base font-light">{value}</div>
    </div>
    <div className="text-neutral-400 text-[10px] font-light leading-[13px]">Hint Text</div>
  </div>
);

export default UserViewInput;
