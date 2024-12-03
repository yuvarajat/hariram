import React from "react";

const SubHeader = () => {

    return(
        <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <div>
                <span> Bill No: </span>
                <span id="billNo"> 01 </span>
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span> Date: </span>
                    <span id="date">29.04.2024</span>
                </div>
                <div>
                    <span> P.O.No: </span>
                    <span id="PONo">4600319779</span>
                </div>
            </div>
        </div>
    )

};

export default SubHeader;