import React, { useState } from 'react'

interface TestResultProps {
  answers: number[]
}

const TestResult = ({answers}:TestResultProps) => {

  const testValues = {
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0
  }

  const questionLenght = [4,3,4,18,13,11]

  answers.forEach((item, index) => {
    let quarterSize = questionLenght[index]/4
    console.log(quarterSize)
    if (item+1 > 0 && item+1 <= quarterSize) {
      testValues.summer++;
    } else if (item+1 > quarterSize && item+1 <= 2 * quarterSize) {
      testValues.spring++;
    } else if (item+1 > 2 * quarterSize && item+1 <= 3 * quarterSize) {
      testValues.autumn++;
    } else {
      testValues.winter++;
    }
  })

  console.log(testValues)

  return (
    <div>{answers}</div>
  )
}

export default TestResult