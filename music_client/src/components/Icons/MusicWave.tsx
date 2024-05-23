import React from 'react'

const MusicWave = ({ color, classes }: { color: string; classes: string }) => {
    return (
        <div className={`music_wave absolute flex gap-[3px] items-end ${classes}`}>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
            <span className={`w-1 bg-[${color}]`}></span>
        </div>
    )
}

export default MusicWave
