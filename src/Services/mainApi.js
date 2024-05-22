import { RootApi } from "./RootApi"
import { VIDEO_URL } from "./apiUrl"








export const getVideoUrl = (payload)=>{
    return RootApi({
        apiUrl:VIDEO_URL,
        payload,
        method:'GET'
    })

}