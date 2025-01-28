import Message from "../models/message.model.js";

export const getMediaFiles = async(req,res)=>{ // to get the images from mongoDB and to fetch in the "Gallery" in the frontend
    try{
        const myId = req.user._id;
        const media = await Message.find({ // auery to get the images that are either sent or recevied by authUser.
            $or:[
                {senderId:myId, image:{$exists: true}},
                {receiverId:myId, image:{$exists: true}}
            ]
        })
        // console.log(media);

        res.status(200).json(media);
    }catch(error){
        console.log("Error in getMedaiFiles controller: ", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}