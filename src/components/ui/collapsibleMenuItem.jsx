import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavIcon } from '..';
import { ChevronDownIcon, TriangleDownIcon, DotFilledIcon } from "@radix-ui/react-icons"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

const CollapsibleMenuItem = ({ label, icons, activeIcons, submenu, isOpen, onToggle, pathname }) => {
  return (
    <li className='mt-auto'>
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger className='p-3 text-base font-light rounded-lg text-stone-950 flex items-center gap-3' asChild>
          <button className={` w-full flex justify-between ${isOpen ? 'bg-blue-900' : ''}`}>
            <NavIcon label={label} icons={icons} active={activeIcons} isOpen={isOpen} />
            {
              isOpen ? <TriangleDownIcon className="h-6 w-6 text-white" /> : <ChevronDownIcon className="h-6 w-6" />
            }
            <span className="sr-only">Toggle</span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className='relative ml-3 pb-2'>
            <div className='border-l-blue-900 border-l-[2.5px] h-full absolute left-[11px] -z-10'/>
            {submenu.map((subMenuItem, index) => (
                <Link to={subMenuItem.path} key={index} className={`text-base rounded-lg flex justify-start items-center gap-2 text-stone-950 leading-10 ${pathname === subMenuItem.path ? 'font-bold text-blue-900' : 'font-light'}`}>
                  <DotFilledIcon className={` h-6 w-6 ${pathname === subMenuItem.path ? 'text-blue-900' : 'text-gray-400'}`}/>
                  {subMenuItem.label}
                </Link>
            ))}
        </CollapsibleContent>
      </Collapsible>
    </li>
  )
};

export default CollapsibleMenuItem;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NavIcon } from '..';
// import { ChevronDownIcon, TriangleDownIcon } from "@radix-ui/react-icons"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

// const CollapsibleMenuItem = ({ label, icons, activeIcons, submenu, isOpen, onToggle, pathname }) => {
//   return (
//     <li className='mt-auto'>
//       <Collapsible open={isOpen} onOpenChange={onToggle}>
//         <CollapsibleTrigger className='p-3 text-base font-light rounded-lg text-stone-950 flex items-center gap-3' asChild>
//           <button className={` w-full flex justify-between ${isOpen ? 'bg-blue-900' : ''}`}>
//             <NavIcon label={label} icons={icons} active={activeIcons} isOpen={isOpen} />
//             {
//               isOpen ? <TriangleDownIcon className="h-6 w-6 text-white" /> : <ChevronDownIcon className="h-6 w-6" />
//             }
//             <span className="sr-only">Toggle</span>
//           </button>
//         </CollapsibleTrigger>
//         <CollapsibleContent>
//           <ul className={`list-disc list-inside ml-5 relative text-blue-900`}>
//             <div className='border border-l-blue-900 border-l-[2.5px] w-full h-full absolute left-[1.5px]'/>
//             {submenu.map((subMenuItem, index) => (
//               <li key={index}>
//                 <Link to={subMenuItem.path} className={`py-3 text-base rounded-lg text-stone-950 leading-10 ${pathname === subMenuItem.path ? 'font-bold text-blue-900' : 'font-light'}`}>
//                   {subMenuItem.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </CollapsibleContent>
//       </Collapsible>
//     </li>
//   )
// };

// export default CollapsibleMenuItem;
