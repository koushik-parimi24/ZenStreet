'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const Step4 = () => {
  const formState = useSelector((state: RootState) => state.form)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review & Submit</h2>
      <div>
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <p>Name: {formState.personalInfo.name}</p>
        <p>Email: {formState.personalInfo.email}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Address Details</h3>
        <p>Street: {formState.addressDetails.street}</p>
        <p>City: {formState.addressDetails.city}</p>
        <p>Zip Code: {formState.addressDetails.zipCode}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Preferences</h3>
        <p>Newsletter: {formState.preferences.newsletter ? 'Yes' : 'No'}</p>
        <p>Terms Accepted: {formState.preferences.terms ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

export default Step4

