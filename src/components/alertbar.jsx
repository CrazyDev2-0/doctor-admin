import React from "react";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlertBarElement from "./alertbar_element";

const AlertBar = ()=>{

    return(
    <>
    <div id="alertBar" className="alertBarContainer">
        <div style={{float: "right"}}><IconButton aria-label='' onClick={()=>document.closeAlertBar()} icon={<FontAwesomeIcon icon={faClose} fontSize={20} />} /></div>
        <div className="systemDetails">
            <p>All Alerts</p>
        </div>
        <div className="divider"></div>
        <div className="alertBarContent">
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
            <AlertBarElement/>
        </div>
    </div>
    </>);
}

export default AlertBar;