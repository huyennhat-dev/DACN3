import { IconPlaylist } from '@tabler/icons-react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setOpenPlaylist } from '../../../redux/features/audioSlice'

const PlayListControl = () => {

    const isOpenPlaylist = useAppSelector((state) => state.audio.isOpenPlaylist)
    const dispatch = useAppDispatch()

    const handleOpenPlaylist = () => {
        if (isOpenPlaylist) {
            dispatch(setOpenPlaylist(false))
        } else {
            dispatch(setOpenPlaylist(true))
        }
    }
    return (
        <div
            onClick={handleOpenPlaylist}
        >
            {
                isOpenPlaylist
                    ?
                    <button className="mx-2 my-0 style__buttons" title="Repeat">
                        <IconPlaylist color='#673AB7' />
                    </button>
                    :
                    <button className="mx-2 my-0 style__buttons" title="Repeat">
                        <IconPlaylist color='#485565' />
                    </button>
            }
        </div>
    )
}

export default PlayListControl
