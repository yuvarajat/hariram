import React from "react";

const CalcPage =() => {
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
        amoInput.value = amount;
        // calculateTA();
      }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#E3F2FD'}}>
        <div style={{fontSize: '26px', fontWeight: 'bold', margin: '10px'}}>
            Hariram's Invoice Generator
        </div>
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
                        <input id="sno1" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat1" class="inputRat" type="text" oninput="calculate(event)" required=""/>
                    </td>
                    <td><textarea id="par1" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)" required=""></textarea></td>
                    <td><input id="nom1" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty1" class="inputQty" type="text" oninput="calculate(event)" required=""/>
                    </td>
                    <td><input id="amo1" class="inputAmo" type="text" disabled=""/></td>
                </tr>
                <tr>
                    <td>
                        <input id="sno2" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat2" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par2" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom2" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty2" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo2" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno3" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat3" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par3" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom3" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty3" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo3" class="inputAmo" type="text" disabled=""/></td>
                </tr>
                <tr>
                    <td>
                        <input id="sno4" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat4" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par4" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom4" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty4" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo4" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno5" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat5" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par5" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom5" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty5" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo5" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno6" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat6" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par6" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom6" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty6" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo6" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno7" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat7" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par7" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom7" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty7" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo7" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno8" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat8" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par8" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom8" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty8" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo8" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno9" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat9" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par9" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom9" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty9" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><input id="amo9" class="inputAmo" type="text" disabled=""/></td>
                </tr>

                <tr>
                    <td>
                        <input id="sno10" class="inputSno" type="text"/>
                    </td>
                    <td>
                        <input id="rat10" class="inputRat" type="text" oninput="calculate(event)"/>
                    </td>
                    <td><textarea id="par10" class="inputPar" type="text" oninput="capitalizeFirstLetter(event)"></textarea></td>
                    <td><input id="nom10" class="inputNOM" type="text"/></td>
                    <td>
                        <input id="qty10" class="inputQty" type="text" oninput="calculate(event)"/>
                    </td>
                    <td>
                        <input id="amo10" class="inputAmo" type="text" disabled=""/>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  );
}

export default CalcPage;