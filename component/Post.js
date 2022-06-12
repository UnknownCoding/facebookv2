import React from 'react'
import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/solid'
const Post = ({key,name,email,userImg,caption,postimg,timestamp}) => {
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-100 mt-5 pt-3 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2 p-2 pb-3'>
                    <img className="rounded-full" src={userImg} width="40" height="40"/>
                    <div>
                        <p className='font-medium text-bold'>{name}</p>
                        <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <p className='pt-4 pb-3 pl-2 text-bold'>{caption}</p>
            </div>
            {postimg && (
                <div className='relative h-56 md:h-96 bg-white'>   
                    <Image src={postimg} objectFit='cover' layout='fill'/> 
                    {/* use layout fill only if you have the container div as a relative property!!!!! */}
                </div>
            )}
            {/* footer */}
            <div className='flex justify-between items-center rounded-2xl bg-white shadow-md text-gray-400 border-t'>
                
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>                          
                </div>
                
                <div className='inputIcon rounded-none'>
                    <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Comment</p>                          

                </div>
                
                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4'/>                                                        
                    <p className='text-xs sm:text-base'>Share</p>                          
                </div>
            
            </div>

        </div>
    )
}

export default Post