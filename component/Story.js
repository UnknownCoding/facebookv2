import React from 'react'
import StoryCard from './StoryCard'

const stories =[
    {
        name:'faketest1',
        src:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
        profile:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
    },
    {
        name:'faketestv2',
        src:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
        profile:'https://cdn-icons-png.flaticon.com/512/142/142362.png',

    },
    {
        name:'anotherone',
        src:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
        profile:'https://cdn-icons-png.flaticon.com/512/142/142362.png',

    },
    {
        name:'trippleXs',
        src:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
        profile:'https://cdn-icons-png.flaticon.com/512/142/142362.png',

    },
    {
        name:'lastofthelast',
        src:'https://cdn-icons-png.flaticon.com/512/142/142362.png',
        profile:'https://cdn-icons-png.flaticon.com/512/142/142362.png',

    },
]

const Story = () => {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story)=>(
                <StoryCard name={story.name} key={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Story