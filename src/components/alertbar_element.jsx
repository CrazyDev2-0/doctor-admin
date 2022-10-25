import React from "react";
import high_risk_image from "../assets/high_risk.svg";
import medium_risk_image from "../assets/medium_risk.svg";
import low_risk_image from "../assets/low_risk.svg";

const getTime = (timestamp) =>  {    
    let myDate = new Date(timestamp * 1000);
    return myDate.toLocaleTimeString().substring(0,5);
}
const AlertBarElement = ({alrt}) => {
    return (
        <>
        <div className="alertBarElement">
            <img src={(alrt.riskLevel === 'high') ? high_risk_image : (alrt.riskLevel === 'medium') ? medium_risk_image : low_risk_image} alt="" />
            <div>
                {/* Patient name */}
                <p className="name">{alrt.user.name}</p>
                <p className="cause">{alrt.cause}</p>
                <p className="disease">Disease - {(alrt.disease) ? alrt.disease.name : `Not specified`}</p>
                <p className="detected">Detected on <span>{getTime(alrt.detectedOn)}</span> by <span>{alrt.reoprtedByName}</span></p>
            </div>
        </div>
        </>
    );
}

export default AlertBarElement;