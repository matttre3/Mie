import React from 'react'

interface TestResultProps {
  answers: number[]
}

const TestResult = ({answers}:TestResultProps) => {
  return (
    <div>{answers}</div>
  )
}

export default TestResult