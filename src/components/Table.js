import React, { useState } from "react";
import styles from './Table.module.css';

const Table = () => {
    const [rows, setRows] = useState([
        {sno: 10, rate: 1.26, particulars: 'Top arm pressure checking', nom: 27.5, qty: 12688, amount: 15986.88},
        {sno: 20, rate: 3.21, particulars: 'Spindle resetting work', nom: 47, qty: 12688, amount: 40728.48},
        {sno: 30, rate: 1.45, particulars: 'Bottom apron replacement', nom: 6, qty: 2736, amount: 3967.20},
        {sno: 40, rate: 5.50, particulars: 'Draw bar roller bearing replacement', nom: 10, qty: 664, amount: 3652.00},
        {sno: 50, rate: 776.25, particulars: 'Machine Erection / Shifting Work / Manpower', nom: 14, qty: 14, amount: 10867.50},
    ]);

    const convertToWords = (num) => {
        const ones = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
        "Seventeen", "Eighteen", "Nineteen"
        ];
        const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ];
        const thousands = ["", "Thousand", "Million", "Billion"];
    
        function convertHundreds(num) {
        let str = '';
        if (num > 99) {
            str += ones[Math.floor(num / 100)] + " Hundred ";
            num = num % 100;
        }
        if (num > 19) {
            str += tens[Math.floor(num / 10)] + " ";
            num = num % 10;
        }
        if (num > 0) {
            str += ones[num] + " ";
        }
        return str.trim();
        }

        function convertToWords(num) {
        if (num === 0) return "Zero";
        
        let words = '';
        let i = 0;
        
        while (num > 0) {
            if (num % 1000 !== 0) {
            words = `${convertHundreds(num % 1000)} ${thousands[i]} ${words}`;
            }
            num = Math.floor(num / 1000);
            i++;
        }
        
        return words.trim();
        }
    
        let [integerPart, decimalPart] = num.toString().split(".");
        let rupees = convertToWords(parseInt(integerPart));
        let paisa = decimalPart ? convertToWords(parseInt(decimalPart)) : "Zero";
    
        return `${rupees} Rupees And ${paisa} Paisa Only`;
    };


    // Calculate total nom and amount
    const total = rows.reduce(
        (acc, row) => {
        acc.nomSum += row.nom;
        acc.amountSum += row.amount;
        return acc;
        },
        { nomSum: 0, amountSum: 0 }
    );

    return(
        <div>
            <table cellPadding={5} width='100%' style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                <caption style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', textTransform: 'uppercase'}}>APRIL 2024</caption>
                <thead>
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle}>S.No.</th>
                        <th className={styles.borderStyle}>Rate</th>
                        <th className={styles.borderStyle}>Particulars</th>
                        <th className={styles.borderStyle}>No. of Man</th>
                        <th className={styles.borderStyle}>Qty</th>
                        <th className={styles.borderStyle}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => <tr className={styles.borderStyle} align='center'>
                        <td className={styles.borderStyle}>{row.sno}</td>
                        <td className={styles.borderStyle}>{row.rate}</td>
                        <td className={styles.borderStyle}>{row.particulars}</td>
                        <td className={styles.borderStyle}>{row.nom}</td>
                        <td className={styles.borderStyle}>{row.qty}</td>
                        <td className={styles.borderStyle} align="right">{parseFloat((row.rate * row.qty).toFixed(2))}</td>
                    </tr>)}
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={3} align="right">Total</th>
                        <th className={styles.borderStyle}>{total.nomSum}</th>
                        <th className={styles.borderStyle}></th>
                        <th className={styles.borderStyle} align="right">{total.amountSum}</th>
                    </tr>
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={5} align="right">ADD: SGST 9% + CGST 9%</th>
                        <th className={styles.borderStyle} align="right">{parseFloat((total.amountSum * 18 / 100).toFixed(2))}</th>
                    </tr>
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={5} align="right">Total</th>
                        <th className={styles.borderStyle} align="right">{parseFloat((total.amountSum * 118 / 100).toFixed(2))}</th>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div style={{fontWeight: 'bold'}}>
                <span>Amount In Words: </span>
                <span>{convertToWords(parseFloat((total.amountSum * 118 / 100).toFixed(2)))}</span>
            </div>
        </div>
    )
};

export default Table;