import React, { useState, useEffect } from "react";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlertBarElement from "./alertbar_element";

import firebaseapp from '../firebase'
import { getMessaging, onMessage } from "firebase/messaging";
import axios from "axios";
    

const BASEURL = 'https://42ca-103-211-134-133.in.ngrok.io';
const AlertBar = ()=>{

    const [notif, setNotif] = useState([]);

    const [_, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const getOldAlerts = async () => {
        const data = await axios({
            method: 'get',
            url: `${BASEURL}/doctor/alert`,
            headers: { 
                'authorization': localStorage.getItem('token')
              }
        });
        console.log(data.data.payload);
        let tmp =  data.data.payload.reverse();
        setNotif(tmp);        
    } 
    useEffect(() => {
        getOldAlerts();
        const messaging = getMessaging(firebaseapp);

        onMessage(messaging, function (payload) {
        console.log('Message received. ', payload);
        let tmp = notif;
        const res = JSON.parse(payload.data.payload);
        // tmp.splice( 0, 0, res );
        setNotif( [res, ...tmp] );
        forceUpdate();
        // setNotif([...notif, payload]);
        console.log(res);
        });
    }, []);

    console.log("NOTIF", notif);

    return(
    <>
    <div id="alertBar" className="alertBarContainer">
        <div style={{float: "right"}}><IconButton aria-label='' onClick={()=>document.closeAlertBar()} icon={<FontAwesomeIcon icon={faClose} fontSize={20} />} /></div>
        <div className="systemDetails">
            <p>All Alerts</p>
        </div>
        <div className="divider"></div>
        <div className="alertBarContent">
            {
                notif.map( elem => <AlertBarElement alrt={ elem }/>)
            }
        </div>
    </div>
    </>);
}

export default AlertBar;