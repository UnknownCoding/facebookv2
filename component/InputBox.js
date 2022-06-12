import React from 'react'
import Image from 'next/image'
import { signOut, useSession, signIn } from 'next-auth/react'
import { useEffect, useState, useRef } from 'react'
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { db,storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { async } from '@firebase/util'



const InputBox = () => {
    const [color, setColor] = useState('https://cdn-icons-png.flaticon.com/512/142/142362.png')
    const inputRef=useRef(null)
    const filePickerRef =useRef(null)
    const [imageToPost,setImageToPost]=useState(null)
    const {data:session} =useSession()
    useEffect(() => setColor(session?.user?.image), [])

    const sendPost =async (e)=>{

        e.preventDefault();

        if(!inputRef.current.value) return;
        
        const docRef = await addDoc(collection(db,'posts'),{
                                message:inputRef.current.value,
                                name:session.user.name,
                                email:session.user.email,
                                image:session.user.image,
                                timestamp: serverTimestamp()
        })
        console.log("New Doc Added with ID",docRef.id);

        if(imageToPost){
            const imageRef = ref(storage,`posts/${docRef.id}/image`)
            await uploadString(imageRef,imageToPost,'data_url').then(async snapshot=>{
                const downloadURL= await getDownloadURL(imageRef)
                await updateDoc(doc(db,'posts',docRef.id),{
                    postimg:downloadURL
                })
            });               
        }   
        setImageToPost(null);
        inputRef.current.value='';
        
    };

    const addImage = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload=(readerEvent)=>{
            setImageToPost(readerEvent.target.result);
        };    
    }

    const removeImage = (e)=>{
        setImageToPost(null);
    }

    return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        
        <div className="flex space-x-4 p-4 items-center">
            
            <Image className="rounded-full" src={color} width="40" height="40" layout='fixed'/>
            
            <form className='flex flex-1'>
                <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type='text' placeholder={`whats in your mind, ${session.user.name} ?`}></input>
                <button className='hidden' type='submit' onClick={sendPost}>Submit</button>
            </form>
            {imageToPost && (<div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor:pointer">
                                <img className='h-10 object-contain ' src={imageToPost} alt="fix ye broswer lad"/>
                                <p className='text-xs text-red-500 text-center'>Remove</p>
                            </div>)}
        </div>

        <div className='flex justify-evenly p-3 border-1'>

            <div className="inputIcon">
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            
            <div onClick={()=>{filePickerRef.current.click()}}className="inputIcon">
                <CameraIcon className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input className='hidden' type="file" onChange={addImage} ref={filePickerRef}/>
            </div>

            <div className="inputIcon">
                <EmojiHappyIcon className='h-7 text-yellow-300'/>
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>

            </div>

        </div>
    </div>
    )
}

export default InputBox