import React from 'react'

const MusicWave = ({ color }: { color: string }) => {
    return (
        <div className=' music_wave absolute flex gap-[3px] items-end top-[66%] left-[26%]'>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
        </div>
    )
}

export default MusicWave
