"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import player from '../../../public/image/player.png'
import winner from '../../../public/image/winner.jpg'
import loser from '../../../public/image/loser.jpg'
import love from '../../../public/image/love.png'
import question from '../question/question'
import Link from 'next/link'

const Quiz = () => {
  const [showResult, setShowResult] = useState(false)
  const [loveIt, setLoveIt] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [clickAnswer, setClickAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [goodAnswer, setGoodAnswer] = useState(false)
  const [badAnswer, setBadAnswer] = useState(false)

  const qst = question[currentQuestion]

  // console.log(qst);

  const chooseAnswer = (option)=>{
    setClickAnswer(true)
    setSelectedOption(option)
    if(option === qst.answer){
      setGoodAnswer(true)
    }
    if(option !== qst.answer){
      setBadAnswer(true)
    }
  }

  const handleLove = ()=>{
    setLoveIt(true)
  }


  const handleQuiz = ()=>{
    setLoveIt(false)
    setCount(0)
    setShowResult(false)
    setCorrect(0)
    setWrong(0)
    setClickAnswer(false)
    setSelectedOption('')
    setGoodAnswer(false)
    setBadAnswer(false)
  }

  const handleNext = ()=>{
    if(goodAnswer === true){
      setCorrect(correct + 1)
    }

    if(badAnswer === true){
      setWrong(wrong + 1)
    }
    setGoodAnswer(false)
    setBadAnswer(false)

    
    setClickAnswer(false)
    setCurrentQuestion(currentQuestion + 1)
    if(question.length === currentQuestion + 1){
      setShowResult(true)
    }
  }
  return (
    <div className='min-h-screen w-full flex flex-col text-center justify-center'>
      {/* <h1>Hello footballers</h1> */}
      <div className='bg-[#5f4be3] w-auto  m-auto h-auto rounded-xl p-4'>
        <div className='flex justify-between text-white text-sm mt-3 mb-3'>
            <div>
                <h3>Score 🏆</h3>
                <h3>{correct * 2}%</h3>
            </div>
            <div>
                <h3>Correct ✔️</h3>
                <h3>{correct}</h3>
            </div>
            <div>
                <h3>wrong ❌</h3>
                <h3>{wrong}</h3>
            </div>
        </div>
        {showResult? <>
          {loveIt? <>
            <Image
          src={love}
          alt='Pics'
          className='md:w-[12rem] mt-12 mb-12 w-[12rem] h-[12rem] p-1 bg-white border-2  rounded-full m-auto'
          />
          <h3 className='text-white text-md font-bold'>For your Web project</h3>
          <p className='text-white text-sm mt-2'>contact me on <br /><span className='text-yellow-500'>adedokunoluyemi1@gmail.com</span></p>
          </> : <>
            {correct * 2 < 70 ? <>
              <Image
                src={loser}
                alt='Pics'
                className='md:w-[12rem] mt-12 mb-12 w-[12rem] h-[12rem] border-2  rounded-full m-auto'
                />
                <h3 className='text-white text-xl font-bold'>Opppps..😟</h3>
                <p className='text-white text-sm mt-2 mb-4'>You Lose</p>
                <p className='text-white text-sm mt-2'>You earned <span className='text-yellow-500'>+{correct * 2}0</span> free coins!</p>
              
              </> : <>
                <Image
                src={winner}
                alt='Pics'
                className='md:w-[12rem] mt-12 mb-12 w-[12rem] h-[12rem] border-2  rounded-full m-auto'
                />
                <h3 className='text-white text-xl font-bold'>Congrats...</h3>
                <p className='text-white text-sm mt-2 mb-4'>You earned <span className='text-yellow-500'>+{correct * 2}0</span> free coins!</p>
              </>}
            
          
          </>}
        <div>
          
          <button className='md:w-[20rem] w-[21rem] px-5 py-2 border-2 text-black bg-white mt-4 mb-5 rounded-md' onClick={handleLove}>Love It</button> <br />
          <Link href='/'>
          <button className='md:w-[20rem] w-[21rem] px-5 py-2 border-2 text-black bg-[#8fe055] rounded-md' onClick={handleQuiz}>Take new quiz</button>
          </Link>
        </div>
        </> : <>
        <Image
        src={player}
        alt='Pics'
        className='md:w-[20rem] w-[21rem] h-[12rem] border-2  rounded-md m-auto'
        />
        <p className='text-white text-sm'>Question {currentQuestion + 1} out of {question.length}</p>
        
            <div key={qst?.id}>
              <h1 className='text-white md:text-md text-md mb-4 mt-2 md:w-[20rem]'>{qst?.question}</h1>
              <div className='grid md:grid-cols-1 grid-cols-2 md:gap-4 gap-x-2 gap-y-2 md:gap-y-2'>
                {qst?.options?.map((option)=>{
                  return(
                    <>
                        <button disabled={clickAnswer? true : false} onClick={()=>chooseAnswer(option)} id={clickAnswer && option === qst.answer ? 'correctAnswer' : clickAnswer && option === selectedOption ? 'wrongAnswer' : ''} className='md:w-full text-[#5f4be3] font-bold text-sm px-1 py-3 md:py-2 h-auto rounded-md w-full m-auto bg-white border-2 border-[#ebe4f2]'>{option}</button>
                    </>
                  )
                })}
              </div>
            </div>
        <button onClick={handleNext} className='w-1/3 bg-transparent text-white hover:text-[#5f4be3] hover:bg-white px-2 py-1 mt-5 rounded-md border-2'>Next</button>
        </>}
      </div>
    </div>
  )
}

export default Quiz