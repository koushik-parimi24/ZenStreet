'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setPersonalInfo } from '@/store/formSlice'
import { RootState } from '@/store/store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Step1 = () => {
  const dispatch = useDispatch()
  const personalInfo = useSelector((state: RootState) => state.form.personalInfo)
  const collaborativeChanges = useSelector((state: RootState) => state.form.collaborativeChanges.personalInfo || {})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPersonalInfo({ [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {collaborativeChanges.name && (
          <p className="text-sm text-blue-500 mt-1">Collaborative change: {collaborativeChanges.name}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {collaborativeChanges.email && (
          <p className="text-sm text-blue-500 mt-1">Collaborative change: {collaborativeChanges.email}</p>
        )}
      </div>
    </div>
  )
}

export default Step1

