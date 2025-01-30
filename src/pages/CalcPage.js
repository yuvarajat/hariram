import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicTable from "./DynamicTable";
import { setInvoiceNo, setInvoiceDate, setInvoicePONo, setExtractedMonthYear } from '../redux/appSlice';
import { useDispatch, useSelector } from "react-redux";

const CalcPage =() => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalAmount = useSelector(state => state.app.totalAmount);
    const gst = useSelector(state => state.app.gst);
    const finalAmount = useSelector(state => state.app.finalAmount);
    const amountInWords = useSelector(state => state.app.amountInWords);

    console.log("totalAmount: ", totalAmount);

    const updateInvoiceNo = (event) => {
        dispatch(setInvoiceNo(event.target.value));
    }

    const updateInvoicePONo = (event) => {
        dispatch(setInvoicePONo(event.target.value));
    }

    const extractMonthYear = (event) => {
        const dateValue = event.target.value; // Gets the value in YYYY-MM-DD format

        const convertDateFormat = (inputDate) => {
            // Parse the input date
            const parts = inputDate.split("-");
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];
          
            // Create a new date string in the desired format
            const outputDate = `${day}-${month}-${year}`;
          
            return outputDate;
        }

        if (dateValue) {
            const dateObj = new Date(dateValue);

            // Get the month as a fully capitalized string
            const month = dateObj.toLocaleString("default", { month: "long" }).toUpperCase();

            // Get the year
            const year = dateObj.getFullYear();

            const conDateF = convertDateFormat(dateValue);
            // Combine them into the desired format
            dispatch(setInvoiceDate(conDateF));
            dispatch(setExtractedMonthYear(`${month} ${year}`));
        }
    };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100dvh', width: '100%', backgroundColor: '#E3F2FD'}}>
        <div style={{fontSize: '26px', fontWeight: 'bold', margin: '10px'}}>
            Hariram's Invoice Generator
        </div>
        <br/>
        <table>
            <tbody>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Invoice No: </td>
                    <td><input id="invoiceNo" type="text" onChange={updateInvoiceNo} required="" /></td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>Invoice Date: </td>
                    <td>
                        <input id="invoiceDate" type="date" onChange={extractMonthYear} required="" />
                    </td>
                </tr>
                <tr>
                    <td style={{fontWeight: 'bold'}}>P.O.No: </td>
                    <td>
                        <input id="PONo" type="text" onChange={updateInvoicePONo} required="" />
                    </td>
                </tr>
                <tr>
                </tr>
            </tbody>
        </table>
        <br/>
        <DynamicTable />
        <br/>
        <table>
            <tbody>
                <tr>
                    <th>Total</th>
                    <th>GST</th>
                    <th>Total Amount</th>
                </tr>
                <tr>
                    <td><input id="total" type="text" value={totalAmount} disabled/></td>
                    <td><input id="cgst" type="text" value={gst} disabled /></td>
                    <td><input id="totalAmount" type="text" value={finalAmount} disabled /></td>
                </tr>
                <tr></tr>
                <tr>
                    <td><b>Amount (in words):</b></td>
                </tr>
                <tr>
                    <td colSpan={4}><input style={{width: '450px'}} id="amountInWords" type="text" value={amountInWords} disabled /></td>
                </tr>
            </tbody>
          </table>
          <br/>
        <div>
            <button style={{padding: '10px 20px', margin: '10px', cursor: 'pointer', border: '2px solid #c62828', borderRadius: '4px', backgroundColor: '#f44336', color: '#fff', fontSize: '16px'}} type="reset">RESET</button>
            <button onClick={() => navigate('/bill')} style={{padding: '10px 20px', margin: '10px', cursor: 'pointer', border: '2px solid #2e7d3f', borderRadius: '4px', backgroundColor: '#4caf50', color: '#fff', fontSize: '16px'}} type="submit">SUBMIT</button>
        </div>
        <br/>
        <br/>
        <br/>
        <h3 style={{textAlign: 'center'}}>
            © 2025 - Trendsetters Enterprise. All Rights Reserved. <br/><br/>
            Developed by <a href="https://www.linkedin.com/in/yuvarajat/">Yuvaraja Tamilvanan</a>
        </h3>
        <br/>
    </div>
  );
}

export default CalcPage;