
import loginSignupimage from "../assets/login-animation.gif"
const Signup = () => {
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
        <h1 className="text-center text-xl font-bold">Sign Up</h1>
        <div className='w-20'>
            <img src={loginSignupimage} className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Signup
