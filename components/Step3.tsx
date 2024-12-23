'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setPreferences } from '@/store/formSlice'
import { RootState } from '@/store/store'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const Step3 = () => {
  const dispatch = useDispatch()
  const preferences = useSelector((state: RootState) => state.form.preferences)
  const collaborativeChanges = useSelector((state: RootState) => state.form.collaborativeChanges.preferences || {})

  const handleChange = (name: string) => (checked: boolean) => {
    dispatch(setPreferences({ [name]: checked }))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={preferences.newsletter}
          onCheckedChange={handleChange('newsletter')}
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      {collaborativeChanges.newsletter !== undefined && (
        <p className="text-sm text-blue-500 mt-1">
          Collaborative change: {collaborativeChanges.newsletter ? 'Subscribed' : 'Not subscribed'}
        </p>
      )}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={preferences.terms}
          onCheckedChange={handleChange('terms')}
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      {collaborativeChanges.terms !== undefined && (
        <p className="text-sm text-blue-500 mt-1">
          Collaborative change: {collaborativeChanges.terms ? 'Accepted' : 'Not accepted'}
        </p>
      )}
    </div>
  )
}

export default Step3

