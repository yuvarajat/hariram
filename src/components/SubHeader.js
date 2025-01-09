import React from "react";

const SubHeader = ({billDetails}) => {

    return(
        <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <div>
                <span> Bill No: </span>
                <span id="billNo"> {billDetails.invoiceNo} </span>
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span> Date: </span>
                    <span id="date"> {billDetails.invoiceDate} </span>
                </div>
                <div>
                    <span> P.O.No: </span>
                    <span id="PONo"> {billDetails.invoicePONo} </span>
                </div>
            </div>
        </div>
    )

};

export default SubHeader;