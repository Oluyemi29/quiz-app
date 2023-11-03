import Image from 'next/image'
import player from '../../public/image/player.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col text-center justify-center'>
      {/* <h1>Hello footballers</h1> */}
      <div className='bg-[#5f4be3] w-auto  m-auto p-2 h-auto rounded-xl'>
        <Image
        src={player}
        alt='Pics'
        className='md:w-[18rem] w-[15rem] h-[15rem] border-2 rounded-md md:m-15 m-12'
        />
        <h1 className='text-white md:text-2xl text-lg font-bold'>Football Quiz</h1>
        <p className='text-white text-sm'>Do you prove to know football history? <br/> Answer the quiz <br />If you score less than 70%, <br/> that means u know nothing</p>
        <Link href='/quiz'>
          <button className='md:w-[18rem] w-[15rem] px-5 py-2 bg-[#8fe055] rounded-md text-black md:text-2xl text-lg font-bold mt-12 mb-12 border-2 b'>Start Quiz</button>
        </Link>
      </div>
    </div>
  )
}
