import React, { useState } from "react";
import test from "../assets/test.json";
import { QuizData } from "../types";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

interface TestProps {
  answers: number[];
  setAnswers: React.Dispatch<React.SetStateAction<number[]>>;
}


const Test: React.FC<TestProps> = ({ answers, setAnswers }) => {
  const data: QuizData = test;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  const navigate = useNavigate();
  console.log(data)

  function selectAnswer(index: number) {
    console.log(index);
    let updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;
    setAnswers(updatedAnswers);
    console.log(updatedAnswers);
  }

  return (
    <>
      <div className="container mx-auto flex flex-col min-h-screen item">
        <button
          onClick={() => {
            setCurrentQuestion(
              (prevCurrentQuestion: number) => prevCurrentQuestion - 1
            );
            
          }}
        >
          down
        </button>
        <p className="text-center font-poppins">{data.test[currentQuestion].question}</p>
        <div className="flex flex-wrap gap-10 mt-8 items-stretch justify-center">
          {data.test[currentQuestion].answers.map((answer, index) => (
            <div
              className={cx("border-2 p-5 w-auto h-auto  flex flex-col items-center justify-center", {
                "border-red-500": answers[currentQuestion] === index,
                "border-slate-500": answers[currentQuestion] != index,
              })}
              key={index}
              onClick={() => {
                selectAnswer(index);
              }}
            >
              <p className="font-poppins">{answer.text}</p>
              <img src={answer.image} alt="" />
            </div>
          ))}
        </div>
        <button
          className='font-poppins border-2 border-blue-800 text-blue-800 w-fit pl-6 pr-6 p-2 mt-6 rounded-xl hover:bg-blue-800 hover:text-white transition duration-150'
          onClick={() => {
            if (currentQuestion == (data.test.length - 1) ) {
              navigate("/test-result")
            } else 
            setCurrentQuestion(
              (prevCurrentQuestion: number) => prevCurrentQuestion + 1
            );
          }}
          disabled={answers[currentQuestion] === undefined}
        >
          Next Question
        </button>
      </div>
    </>
  );
};

export default Test;
