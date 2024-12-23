import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  personalInfo: {
    name: string
    email: string
  }
  addressDetails: {
    street: string
    city: string
    zipCode: string
  }
  preferences: {
    newsletter: boolean
    terms: boolean
  }
  collaborativeChanges: Partial<FormState>
}

const initialState: FormState = {
  personalInfo: {
    name: '',
    email: '',
  },
  addressDetails: {
    street: '',
    city: '',
    zipCode: '',
  },
  preferences: {
    newsletter: false,
    terms: false,
  },
  collaborativeChanges: {},
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<Partial<FormState['personalInfo']>>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload }
    },
    setAddressDetails: (state, action: PayloadAction<Partial<FormState['addressDetails']>>) => {
      state.addressDetails = { ...state.addressDetails, ...action.payload }
    },
    setPreferences: (state, action: PayloadAction<Partial<FormState['preferences']>>) => {
      state.preferences = { ...state.preferences, ...action.payload }
    },
    updateCollaborativeChanges: (state, action: PayloadAction<Partial<FormState>>) => {
      state.collaborativeChanges = action.payload
    },
  },
})

export const { setPersonalInfo, setAddressDetails, setPreferences, updateCollaborativeChanges } = formSlice.actions
export default formSlice.reducer

