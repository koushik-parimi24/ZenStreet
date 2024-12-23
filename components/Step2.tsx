'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setAddressDetails } from '@/store/formSlice'
import { RootState } from '@/store/store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Step2 = () => {
  const dispatch = useDispatch()
  const addressDetails = useSelector((state: RootState) => state.form.addressDetails)
  const collaborativeChanges = useSelector((state: RootState) => state.form.collaborativeChanges.addressDetails || {})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAddressDetails({ [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="street">Street</Label>
        <Input
          id="street"
          name="street"
          value={addressDetails.street}
          onChange={handleChange}
          placeholder="Enter your street address"
        />
        {collaborativeChanges.street && (
          <p className="text-sm text-blue-500 mt-1">Collaborative change: {collaborativeChanges.street}</p>
        )}
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={addressDetails.city}
          onChange={handleChange}
          placeholder="Enter your city"
        />
        {collaborativeChanges.city && (
          <p className="text-sm text-blue-500 mt-1">Collaborative change: {collaborativeChanges.city}</p>
        )}
      </div>
      <div>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={addressDetails.zipCode}
          onChange={handleChange}
          placeholder="Enter your zip code"
        />
        {collaborativeChanges.zipCode && (
          <p className="text-sm text-blue-500 mt-1">Collaborative change: {collaborativeChanges.zipCode}</p>
        )}
      </div>
    </div>
  )
}

export default Step2

