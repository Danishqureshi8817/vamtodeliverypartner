// RegistrationContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state for registration data
const initialState = {
  name: '',
  mobile: null,
  paymentType: '', // 'upi' or 'bank'
  bankName: '',
  ifscCode: '',
  accountNumber: '',
  upiId: '',
  drivingLicence: [], // array of image URIs
  diverRc: '', // image URI
  vehiclePlate: '', // image URI
  adharCardNumber: [], // array of image URIs
  vehicleDetails: '',
  pencard: [], // array of image URIs
  location: {
    coordinates: [0, 0]
  },
  email: '',
  password: ''
};

// Action types
const actionTypes = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  UPDATE_MULTIPLE_FIELDS: 'UPDATE_MULTIPLE_FIELDS',
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  ADD_IMAGE: 'ADD_IMAGE',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  RESET_FORM: 'RESET_FORM'
};

// Reducer function
const registrationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    
    case actionTypes.UPDATE_MULTIPLE_FIELDS:
      return {
        ...state,
        ...action.fields
      };
    
    case actionTypes.UPDATE_LOCATION:
      return {
        ...state,
        location: {
          coordinates: action.coordinates
        }
      };
    
    case actionTypes.ADD_IMAGE:
      const currentImages = Array.isArray(state[action.field]) 
        ? state[action.field] 
        : [];
      return {
        ...state,
        [action.field]: [...currentImages, action.imageUri]
      };
    
    case actionTypes.REMOVE_IMAGE:
      return {
        ...state,
        [action.field]: state[action.field].filter(
          (_, index) => index !== action.index
        )
      };
    
    case actionTypes.RESET_FORM:
      return initialState;
    
    default:
      return state;
  }
};

// Create context
const RegistrationContext = createContext();

// Context provider component
export const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  // Utility functions for common operations
  const updateField = (field, value) => {
    dispatch({ type: actionTypes.UPDATE_FIELD, field, value });
  };

  const updateMultipleFields = (fields) => {
    dispatch({ type: actionTypes.UPDATE_MULTIPLE_FIELDS, fields });
  };

  const updateLocation = (coordinates) => {
    dispatch({ type: actionTypes.UPDATE_LOCATION, coordinates });
  };

  const addImage = (field, imageUri) => {
    dispatch({ type: actionTypes.ADD_IMAGE, field, imageUri });
  };

  const removeImage = (field, index) => {
    dispatch({ type: actionTypes.REMOVE_IMAGE, field, index });
  };

  const resetForm = () => {
    dispatch({ type: actionTypes.RESET_FORM });
  };

  // Validation functions
  const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!state.name) errors.name = 'Name is required';
    if (!state.mobile) errors.mobile = 'Mobile is required';
    if (!validateMobile(state.mobile)) errors.mobile = 'Invalid mobile number';
    if (!state.email) errors.email = 'Email is required';
    if (!validateEmail(state.email)) errors.email = 'Invalid email format';
    if (!state.password) errors.password = 'Password is required';
    if (state.password && state.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Payment validation
    if (state.paymentType === 'bank') {
      if (!state.bankName) errors.bankName = 'Bank name is required';
      if (!state.ifscCode) errors.ifscCode = 'IFSC code is required';
      if (!state.accountNumber) errors.accountNumber = 'Account number is required';
    } else if (state.paymentType === 'upi') {
      if (!state.upiId) errors.upiId = 'UPI ID is required';
    }

    // Document validation
    if (state.drivingLicence.length === 0) {
      errors.drivingLicence = 'Driving license images required';
    }
    if (!state.diverRc) errors.diverRc = 'Driver RC image required';
    if (!state.vehiclePlate) errors.vehiclePlate = 'Vehicle plate image required';
    if (state.adharCardNumber.length === 0) {
      errors.adharCardNumber = 'Aadhar card images required';
    }
    if (state.pencard.length === 0) errors.pencard = 'PAN card images required';

    return errors;
  };

  const value = {
    registrationData: state,
    updateField,
    updateMultipleFields,
    updateLocation,
    addImage,
    removeImage,
    resetForm,
    validateForm
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

// Custom hook to use the registration context
export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};