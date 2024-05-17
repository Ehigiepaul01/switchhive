export default function AuthCard({ children, title, subtitle, logo }) {
  return (
    <div className="flex flex-col items-start w-full p-16 px-6 m-auto border rounded-md md:px-20 md:w-1/2 border-zinc-900 border-opacity-5">
      {logo && <img src={logo} alt="logo" className="mb-10" />}
      <h1 className="text-2xl font-bold leading-9 tracking-tight lg:text-3xl text-stone-950">
        {title}
      </h1>
      <p className="mt-2 text-sm font-light leading-snug tracking-tight text-neutral-400">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
