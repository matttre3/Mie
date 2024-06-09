import { useNavigate } from 'react-router'

const Logo = () => {
    const navigate = useNavigate()
  return (
    <div onClick={() => {navigate("/");}} className='flex flex-col items-center cursor-pointer'>
        <img className='w-20' src="/MIE-LOGO.png" alt="" />
        <img className='w-12 mt-2' src="/Mie.svg" alt="" />
    </div>
  )
}

export default Logo