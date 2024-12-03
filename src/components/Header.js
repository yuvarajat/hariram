import React from "react";

const Header = () => {
    return (

        <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <div style={{textAlign: 'left'}}>
                <div>M. HARIRAM</div>
                <div>2/143, Vasuki Street,</div>
                <div>Thenur Post,</div>
                <div>Madurai - 625402.</div>
                <div>S.C.No: 108579</div>
            </div>
            <div style={{textAlign: 'left'}}>
                <div>Bank Name: Canara Bank</div>
                <div>Account No: 1008201010612</div>
                <div>IFSC Code: CNRB0001008</div>
                <div>PAN Number: ACWPH9219A</div>
                <div>GST Number: 33ACWPH9219A12M</div>
            </div>
        </div>

    )
    
};

export default Header;