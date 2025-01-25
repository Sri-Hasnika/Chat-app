import {create} from "zustand";
import {axiosInstance} from '../lib/axios.js';


export const useMediaStore = create((set)=>({
    mediaFiles:[],

    getMediaFiles: async()=>{
        try{
            const res = await axiosInstance.get("/media/mediaFiles");
            set({ mediaFiles: res.data});

        }catch(error){
            console.log("Error in getMediaFiles: ", error.message);
            set({mediaFiles: null});
        } 
    }

}))