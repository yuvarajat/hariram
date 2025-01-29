import React, { useEffect } from "react";
import { setFormData, setTotalAmount, setGST, setFinalAmount, setAmountInWords } from "../redux/appSlice";
import { useSelector, useDispatch } from "react-redux";

const DynamicTable = () => {
  // const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const formData = useSelector(state => state.app.formData);

  console.log("formData: ", formData);

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


  useEffect(() => {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
      const amoValue = parseFloat(window[`amo${i}`].value) || 0;  // Convert to number
      const roundedValue = parseFloat(amoValue.toFixed(2));  // Round to two decimals
        total += roundedValue;
    }

    const amountInWords = convertToWords((total * 118 / 100).toFixed(2));

    dispatch(setTotalAmount(total.toFixed(2)));
    dispatch(setGST(((total * 18) / 100).toFixed(2)));
    dispatch(setFinalAmount((total * 118 / 100).toFixed(2)));
    dispatch(setAmountInWords(amountInWords));
  }, [formData, dispatch]);


  // Handle input changes
  const handleChange = (event) => {
    const { id, value } = event.target;

    // Update the state dynamically using the input `id` as the key
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [id]: value,
    // }));
    dispatch(setFormData({id, value}));
  };

  const calculate = (event) => {
    const { id, value } = event.target;
    const slicedId = id.slice(3);

    dispatch(setFormData({id, value}));

    console.log("inside calculate ID: ", id);
    if (id.startsWith("rat")) {
        console.log("I am rate: ", id);
    } else if(id.startsWith("qty")) {
        console.log("I am quantity: ", id);
    }

    console.log("slice: ", id.slice(3));
    // Extract rate and quantity from formData using their IDs
    const rateId = "rat" + slicedId;
    const quantityId = "qty" + slicedId;
    const amountId = "amo" + slicedId;

    console.log("inside calculate rateId: ", rateId, "amountId: ", amountId);

    const rate = id.startsWith("rat") ? parseFloat(value) || 0 : parseFloat(formData[rateId]) || 0;
    const quantity = id.startsWith("qty") ? parseFloat(value) || 0 : parseFloat(formData[quantityId]) || 0;    

    console.log("rate: ", rate, "quantity: ", quantity);

    const amount = rate * quantity;

    console.log("amount: ", amount);

    // Update the amount field dynamically
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [amountId]: amount.toFixed(2), // Keep 2 decimal points
    // }));
    dispatch(setFormData({id: amountId, value: amount.toFixed(2)}));
  };

  const capitalizeFirstLetter = (event) => {
    const { id, value } = event.target;

    // Capitalize the first letter of the input value
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    // Update the state
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [id]: capitalizedValue,
    // }));
    dispatch(setFormData({id: id, value: capitalizedValue}));
  };

  return (
    <table style={{ border: "none" }}>
      <tbody>
        <tr>
          <th>S.No.</th>
          <th>Rate(Rs.)</th>
          <th>Particulars</th>
          <th>No. Of Man</th>
          <th>Quantity</th>
          <th>Amount(Rs.)</th>
        </tr>
        {[...Array(10)].map((_, index) => {
          const rowNumber = index + 1;
          return (
            <tr key={rowNumber}>
              <td>
                <input
                  id={`sno${rowNumber}`}
                  className="inputSno"
                  type="text"
                  value={formData[`sno${rowNumber}`] || ""}
                  onInput={handleChange}
                />
              </td>
              <td>
                <input
                  id={`rat${rowNumber}`}
                  className="inputRat"
                  type="text"
                  value={formData[`rat${rowNumber}`] || ""}
                  // onChange={handleChange}
                  onInput={calculate}
                />
              </td>
              <td>
                <textarea
                  id={`par${rowNumber}`}
                  className="inputPar"
                  value={formData[`par${rowNumber}`] || ""}
                  // onChange={handleChange}
                  onInput={capitalizeFirstLetter}
                />
              </td>
              <td>
                <input
                  id={`nom${rowNumber}`}
                  className="inputNOM"
                  type="text"
                  value={formData[`nom${rowNumber}`] || ""}
                  onInput={handleChange}
                />
              </td>
              <td>
                <input
                  id={`qty${rowNumber}`}
                  className="inputQty"
                  type="text"
                  value={formData[`qty${rowNumber}`] || ""}
                  // onChange={handleChange}
                  onInput={calculate}
                />
              </td>
              <td>
                <input
                  id={`amo${rowNumber}`}
                  className="inputAmo"
                  type="text"
                  value={formData[`amo${rowNumber}`] || ""}
                  disabled
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DynamicTable;
