import React from "react";
import { useNavigate } from "react-router-dom";

const CalcPage =({setBillDetails, setRows}) => {

    const navigate = useNavigate();

    const calculate = (event) => {
        let targetId = event.target.id;
        let index = targetId.slice(3);
      
        let qtyId = `qty${index}`;
        let ratId = `rat${index}`;
        let amoId = `amo${index}`;
      
        let qtyInput = document.getElementById(qtyId);
        let ratInput = document.getElementById(ratId);
        let amoInput = document.getElementById(amoId);
      
        // Extract the numeric part from the input values
        let qtyValue = parseFloat(qtyInput.value) || 0; // Convert to float, default to 0 if not a valid number
        let ratValue = parseFloat(ratInput.value) || 0;
      
        let amount = qtyValue * ratValue;
      
        // Update the amount field
        amoInput.value = parseFloat(amount).toFixed(2);;
        // calculateTA();
      }

      const capitalizeFirstLetter = (event) => {
        const paragraph = event.target.value;
        if (!paragraph || typeof paragraph !== "string") {
            return "";
        }
    
        // Split the paragraph into sentences using punctuation as delimiters.
        const sentences = paragraph.split(/([.!?]\s*)/);
    
        // Capitalize the first letter of each sentence.
        const capitalized = sentences
            .map((sentence) =>
                sentence.trim().length > 0
                    ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
                    : sentence
            )
            .join("");
    
        return capitalized;
    }


    const updateInvoiceNo = (event) => {
        setBillDetails((prevBillDetails) => ({...prevBillDetails, invoiceNo: event.target.value}));
    }

    const updateInvoicePONo = (event) => {
        setBillDetails((prevBillDetails) => ({...prevBillDetails, invoicePONo: event.target.value}));
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

            // Combine them into the desired format
            setBillDetails((prevBillDetails) => ({...prevBillDetails, invoiceDate: convertDateFormat(dateValue), extractedMonthYear: `${month} ${year}`}));
        }
    };

    const updateRow = (event) => {
        console.log("Event: ", event, " Target: ", event.target, " Target ID: ", event.target.id.slice(3), " Target Value: ", event.target.value);
        // switch (event.target.id.slice(3)){
        //     case '1':
        //         setRows((prevRows) => ([...prevRows, prevRows[0].rate = event.target.value]))
        // }
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#E3F2FD'}}>
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
        <table style={{border: 'none' }}>
            <tbody>
                <tr>
                    <th>S.No.</th>
                    <th>Rate(Rs.)</th>
                    <th>Particulars</th>
                    <th>No. Of Man</th>
                    <th>Quantity</th>
                    <th>Amount(Rs.)</th>
                </tr>
                <tr>
                    <td>
                        <input id="sno1" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat1" className="inputRat" type="text" onInput={calculate} onChange={updateRow} required=""/>
                    </td>
                    <td><textarea id="par1" className="inputPar" type="text" onInput={capitalizeFirstLetter} required=""></textarea></td>
                    <td><input id="nom1" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty1" className="inputQty" type="text" onInput={calculate} required=""/>
                    </td>
                    <td><input id="amo1" className="inputAmo" type="text" disabled/></td>
                </tr>
                <tr>
                    <td>
                        <input id="sno2" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat2" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par2" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom2" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty2" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo2" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno3" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat3" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par3" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom3" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty3" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo3" className="inputAmo" type="text" disabled/></td>
                </tr>
                <tr>
                    <td>
                        <input id="sno4" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat4" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par4" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom4" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty4" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo4" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno5" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat5" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par5" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom5" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty5" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo5" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno6" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat6" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par6" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom6" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty6" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo6" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno7" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat7" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par7" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom7" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty7" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo7" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno8" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat8" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par8" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom8" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty8" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo8" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno9" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat9" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par9" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom9" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty9" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td><input id="amo9" className="inputAmo" type="text" disabled/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno10" className="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat10" className="inputRat" type="text" onInput={calculate}/>
                    </td>
                    <td><textarea id="par10" className="inputPar" type="text" onInput={capitalizeFirstLetter}></textarea></td>
                    <td><input id="nom10" className="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty10" className="inputQty" type="text" onInput={calculate}/>
                    </td>
                    <td>
                        <input id="amo10" className="inputAmo" type="text" disabled/>
                    </td>
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