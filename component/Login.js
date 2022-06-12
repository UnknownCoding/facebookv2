import React from 'react'
import Image from 'next/image'
import {getProviders,signIn as SignIntoProvider} from 'next-auth/react';


const Login = () => {

    return (
        <div className='grid place-items-center pt-10'>
            <Image
            className='rounded-full'
            src="https://cdn-icons-png.flaticon.com/512/142/142362.png"
            alt='Use A Different Browser'
            height='300'
            width='300'
            objectFit='contain'
            />
            <h1 onClick={SignIntoProvider} className='bg-blue-500 pt-5 mt-5 h-14 w-48 rounded-full text-sm text-white text-center cursor-pointer'>
                Login With Facebook 
            </h1>
        </div>
    )
}



export default Login