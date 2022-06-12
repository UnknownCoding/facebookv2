import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../component/Header'
import Login from '../component/Login'
import Sidebar from '../component/Sidebar'
import Feed from '../component/Feed'
import Widget from '../component/Widget'
import { collection, onSnapshot, orderBy, query,db,getFirestore  } from 'firebase/firestore';
import { useState } from 'react'


export default function Home({session}) {
  if (!session) return <Login/>
  return (
    <div >
      <Head>
        <title>facebook</title>
      </Head>

      <Header/>

      <main className='flex'>
        <Sidebar/>
        <Feed/>
        <Widget/>
      </main>

    </div>
  )
}

//learn how to implement server side renderin

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {  
            props:{
              session,
            }
        
        }
  }
