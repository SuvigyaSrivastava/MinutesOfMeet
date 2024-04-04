import React from "react";
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
 

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1015453635;
        const serverSecret = "fa54835b2c843f7ef867f3f7ac9a3531";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Suvigya");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks : [{
        name  : 'Copy Link',
        url : 'http://localhost:3001/room/${roomId}',  
        }],
        scenario: {
        mode : ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton : true,
    })
    }
     return <div>
        <div ref = {myMeeting} />
     </div>
};
export default RoomPage;