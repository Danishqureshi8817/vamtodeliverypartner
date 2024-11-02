import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FormState {
  form_details: any[]; // Adjust the type according to your actual data structure
}

const initialState: FormState = {
  form_details: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForms(
      state,
      action: PayloadAction<{name: keyof FormState; value: any}>,
    ) {
      const {name, value} = action.payload;
      state[name] = value;
    },
  },
});

export const {addForms} = formSlice.actions;
export default formSlice.reducer;
