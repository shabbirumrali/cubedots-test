import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Home = () => {    
    return (
        <div className="home_container">
            <ReactPlayer width='100%' playing={true} height='90vh' url='https://youtu.be/HemojYBVL-c' className="video_player" />
        </div>
    )
}

export default Home
