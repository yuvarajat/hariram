import React from "react";
import styles from './Table.module.css';
import { useSelector } from "react-redux";

const Table = ({billDetails}) => {
    
    const formData = useSelector(state => state.app.formData);
    const total = useSelector(state => state.app.totalAmount);
    const gst = useSelector(state => state.app.gst);
    const finalAmount = useSelector(state => state.app.finalAmount);
    const amountInWords = useSelector(state => state.app.amountInWords);

    // Function to get rows from formData
    const getRows = () => {
        const rows = [];

        // Loop through the formData to extract relevant rows
        for (let i = 1; i <= 10; i++) {
            const sno = formData[`sno${i}`];
            const rate = formData[`rat${i}`];
            const amount = formData[`amo${i}`];
            const qty = formData[`qty${i}`];
            const particulars = formData[`par${i}`];
            const nom = formData[`nom${i}`];

            // Only add rows that have data (excluding empty fields)
            if (sno && rate && amount && qty && nom) {
                rows.push({
                    sno,
                    rate,
                    amount,
                    qty,
                    particulars,
                    nom,
                });
            }
        }

        return rows;
    };

    return(
        <div>
            <table cellPadding={5} width='100%' style={{border: '1px solid black', borderCollapse: 'collapse' }}>
                <caption style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', textTransform: 'uppercase'}}>{billDetails.extractedMonthYear}</caption>
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
                    {getRows().map((row, index) => <tr className={styles.borderStyle} align='center' key={index}>
                        <td className={styles.borderStyle}>{row.sno}</td>
                        <td className={styles.borderStyle}>{row.rate}</td>
                        <td className={styles.borderStyle}>{row.particulars}</td>
                        <td className={styles.borderStyle}>{row.nom}</td>
                        <td className={styles.borderStyle}>{row.qty}</td>
                        <td className={styles.borderStyle} align="right">{parseFloat((row.rate * row.qty).toFixed(2))}</td>
                    </tr>)}
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={3} align="right">Total</th>
                        <th className={styles.borderStyle}></th>
                        <th className={styles.borderStyle}></th>
                        <th className={styles.borderStyle} align="right">{total}</th>
                    </tr>
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={5} align="right">ADD: SGST 9% + CGST 9%</th>
                        <th className={styles.borderStyle} align="right">{gst}</th>
                    </tr>
                    <tr className={styles.borderStyle}>
                        <th className={styles.borderStyle} colSpan={5} align="right">Total</th>
                        <th className={styles.borderStyle} align="right">{finalAmount}</th>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div style={{fontWeight: 'bold'}}>
                <span>Amount In Words: </span>
                <span>{amountInWords}</span>
            </div>
        </div>
    )
};

export default Table;