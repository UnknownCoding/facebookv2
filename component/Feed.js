import React from 'react'
import Story from './Story'
import InputBox from './InputBox'
import Posts from './Posts'

const Feed = () => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div>
                {/* Story */}
                <Story/>
                <InputBox/>
                <Posts/>
            </div>
        </div>
    )
}

export default Feed