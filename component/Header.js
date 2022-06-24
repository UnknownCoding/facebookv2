import React from 'react'
import Image from 'next/image'
import { BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon } from "@heroicons/react/outline"
import 'tailwindcss/tailwind.css'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'


const Header = () => {
    const [color, setColor] = useState('https://cdn-icons-png.flaticon.com/512/142/142362.png')
    const {data:session} =useSession()
    useEffect(() => setColor(session?.user?.image), [])

    return (
        
        <div className='sticky top-0 z-50  bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/* left */}

            <div className='flex items-center'> 
                <Image src='https://cdn-icons-png.flaticon.com/512/142/142362.png'
                        width="40"
                        height="40"
                        layout='fixed'/>

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input type="text" className="hidden md:inline-flex flex ml-2 items-center bg-transparent rounded-full placeholder-gray-500 focus:outline-none flex-shrink" placeholder="Search here " ></input>
                </div>
            </div>

            {/* center */}

            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active={true} Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>


                </div>
            </div>
        
            {/* riht */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                
                <Image 
                        className='rounded-full cursor-pointer'
                        src={color}
                        onClick={signOut}
                        width="40"
                        height="40"
                        layout='fixed'
                        alt='lazydsdada'/> 

                    
                <p className="whitespace-nowrap font-bold pr-3">{session?.user?.name}</p>
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            </div>
            
        </div>
        
    )
}

export default Header