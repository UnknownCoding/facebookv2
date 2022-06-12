import { collection, onSnapshot, orderBy, query,db,getFirestore  } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Post from './Post';

const Posts = () => {
    const [posts,setPosts]=useState([null]);
    useEffect(()=>{
        const db = getFirestore()
        return onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot =>{
            setPosts(snapshot.docs)
        });
    },[db])
    return (
        <div>
            {posts.map((post)=>(
                <Post  
                    key={post?.id}
                        name={post?.data()?.name}
                            email={post?.data()?.email} 
                                userImg={post?.data()?.image} 
                                    caption={post?.data()?.message} 
                                        postimg={post?.data()?.postimg} 
                                            timestamp={post?.data()?.timestamp}  
                                                                                />
            ))}
        </div>
    )
}

export default Posts