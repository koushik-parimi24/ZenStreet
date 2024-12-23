'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface MultiStepFormNavProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}

const MultiStepFormNav = ({ currentStep, setCurrentStep }: MultiStepFormNavProps) => (
  <Tabs value={currentStep.toString()} onValueChange={(value) => setCurrentStep(parseInt(value))}>
    <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger value="1">Step 1</TabsTrigger>
      <TabsTrigger value="2">Step 2</TabsTrigger>
      <TabsTrigger value="3">Step 3</TabsTrigger>
      <TabsTrigger value="4">Step 4</TabsTrigger>
    </TabsList>
  </Tabs>
)

export default MultiStepFormNav

