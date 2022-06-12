import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon,VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact';

const contacts = [
    {
        src:"https://cdn-icons-png.flaticon.com/512/142/142362.png",
        name:'Cristiano Ronaldo'
    },
    {
        src:"https://cdn-icons-png.flaticon.com/512/142/142362.png",
        name:'Zinedine Zidane'

    },
    {
        src:"https://cdn-icons-png.flaticon.com/512/142/142362.png",
        name:'Saint Laurun Don'

    },
    {
        src:"https://cdn-icons-png.flaticon.com/512/142/142362.png",
        name:'Metro Boomin'

    }
    ,
    {
        src:"https://cdn-icons-png.flaticon.com/512/142/142362.png",
        name:'Lionel Messi'

    }
    ,
];
const Widget = () => {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6'/>
                    <SearchIcon className='h-6'/>
                    <DotsHorizontalIcon className='h-6'/>
                </div>
            </div>
            {contacts.map((data)=>(
                <Contact key={data.src} src={data.src} name={data.name}/>
            ))}
        </div>
    )
}

export default Widget