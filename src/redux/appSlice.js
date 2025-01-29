import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {},
    totalAmount: 0,
    gst: 0,
    finalAmount: 0,
    amountInWords: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        // setFormData: (state, action) => {
        //     state.formData = action.payload;
        // },
        setFormData: (state, action) => {
            const { id, value } = action.payload;
            state.formData[id] = value;
        },
        setTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
        setGST: (state, action) => {
            state.gst = action.payload;
        },
        setFinalAmount: (state, action) => {
            state.finalAmount = action.payload;
        },
        setAmountInWords: (state, action) => {
            state.amountInWords = action.payload;
        }
    }
});

export const { setFormData, setTotalAmount, setGST, setFinalAmount, setAmountInWords } = appSlice.actions;
export default appSlice.reducer; 