import React from "react";
import high_risk_image from "../assets/high_risk.svg";
import medium_risk_image from "../assets/medium_risk.svg";
import low_risk_image from "../assets/low_risk.svg";

const AlertBarElement = ({alrt}) => {
    return (
        <>
        <div className="alertBarElement">
            <img src={(alrt.riskLevel === 'high') ? high_risk_image : (alrt.riskLevel === 'medium') ? medium_risk_image : low_risk_image} alt="" />
            <div>
                {/* Patient name */}
                <p className="name">{alrt.user.name}</p>
                <p className="cause">Low value in heart rate</p>
                <p className="disease">Disease - {(alrt.disease) ? alrt.disease.name : `Not specified`}</p>
                <p className="detected">Detected on <span>20-12-2022 12:41pm</span> by <span>Automated System</span></p>
            </div>
        </div>
        </>
    );
}

export default AlertBarElement;