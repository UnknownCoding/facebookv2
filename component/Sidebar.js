import React from 'react'
import { signOut, useSession, signIn } from 'next-auth/react'
import { ChevronDownIcon,ShoppingBagIcon,UserGroupIcon, } from '@heroicons/react/outline'
import { UserIcon,DesktopComputerIcon,CalendarIcon,ClockIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'
import { useEffect, useState } from 'react'


const Sidebar = () => {
    const [color, setColor] = useState('https://cdn-icons-png.flaticon.com/512/142/142362.png')
    const {data:session} =useSession()
    useEffect(() => setColor(session?.user?.image), [])

    return (
        <div className='p-2 mt-5 max-w-md xl:min-w-xs'>
            <SidebarRow src={color} title={session?.user?.name}/>
            <SidebarRow Icon={UserIcon} title='Friends'/>
            <SidebarRow Icon={UserGroupIcon} title='Groups'/>
            <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
            <SidebarRow Icon={DesktopComputerIcon} title='Watch'/>
            <SidebarRow Icon={CalendarIcon} title='Events'/>
            <SidebarRow Icon={ClockIcon} title='Memories'/>
            <SidebarRow Icon={ChevronDownIcon} title='See More'/>


        </div>
    )
}

export default Sidebar