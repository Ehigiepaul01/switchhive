import { useEffect, useState } from "react";
import { Input, Button } from "@/components/ui";
import { notification, dollar_circle, medal_star, search } from "../assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthContext } from "@/providers/AuthProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const buttonsData = [
  { icon: notification, alt: 'notification' },
  { icon: dollar_circle, alt: 'dollar-circle' },
  { icon: medal_star, alt: 'medal-star' },
];

const Header = () => {
  const { user, userLogout } = useAuthContext();
  
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value === 'logout') userLogout();
  }, [value])

  return (
    <header className="fixed px-16  max-w-[100rem] py-4 bg-white h-[88px] border-b border-b-neutral-200 top-0 z-50 flex justify-between items-center w-[calc(100%-280px)]">
      <Input type="text" placeholder="Customer" icon={search} className="border-zinc-400 placeholder:text-zinc-400 min-w-52" />
      <div className="flex items-center justify-end w-full gap-4 ml-auto">
        <div className="flex items-center gap-2 p-1 px-2 border rounded-lg border-neutral-200">
          <Avatar>
            <AvatarImage src={user.AvatarImage} />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-bold text-nowrap">{user.firstName} {user.lastName}</h3>
            <p className="text-xs text-neutral-500">{user.role}</p>
          </div>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="p-0 border-none">
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='logout' checkClassName='hidden' className='p-2'>
                Logout
              </SelectItem>
              <SelectItem checkClassName='hidden' className='p-2'>
                Profile Setting
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          {buttonsData.map((button) => (
            <Button variant="icon" size="icon" key={button.alt}>
              <img src={button.icon} alt={button.alt} />
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header