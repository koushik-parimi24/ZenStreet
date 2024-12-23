'use client'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import MultiStepFormNav from './MultiStepFormNav'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { updateCollaborativeChanges } from '@/store/formSlice'
import { RootState } from '@/store/store'
import { useToast } from '@/hooks/use-toast'

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const dispatch = useDispatch()
  const formState = useSelector((state: RootState) => state.form)
  const { toast } = useToast()

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => {
        const newStep = Math.min(prev + 1, 4)
        setProgress(newStep * 25)
        return newStep
      })
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => {
      const newStep = Math.max(prev - 1, 1)
      setProgress(newStep * 25)
      return newStep
    })
  }

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formState.personalInfo.name || !formState.personalInfo.email) {
          toast({
            title: "Validation Error",
            description: "Please fill in all fields in Step 1",
            variant: "destructive",
          })
          return false
        }
        break
      case 2:
        if (!formState.addressDetails.street || !formState.addressDetails.city || !formState.addressDetails.zipCode) {
          toast({
            title: "Validation Error",
            description: "Please fill in all fields in Step 2",
            variant: "destructive",
          })
          return false
        }
        break
      case 3:
        if (!formState.preferences.terms) {
          toast({
            title: "Validation Error",
            description: "Please accept the terms and conditions",
            variant: "destructive",
          })
          return false
        }
        break
    }
    return true
  }

  const handleSubmit = () => {
    if (validateStep()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formState)
      toast({
        title: "Success",
        description: "Your form has been submitted successfully!",
      })
    }
  }

  useEffect(() => {
    const fetchCollaborativeChanges = async () => {
      try {
        const response = await fetch('/api/collaborate')
        const data = await response.json()
        dispatch(updateCollaborativeChanges(data))
      } catch (error) {
        console.error('Error fetching collaborative changes:', error)
      }
    }

    const interval = setInterval(fetchCollaborativeChanges, 5000) // Fetch every 5 seconds

    return () => clearInterval(interval)
  }, [dispatch])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <MultiStepFormNav currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <Progress value={progress} className="mt-4" />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </Button>
        {currentStep === 4 ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button onClick={nextStep}>Next</Button>
        )}
      </div>
    </div>
  )
}

export default MultiStepForm

