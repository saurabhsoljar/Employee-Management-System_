import React, { useState } from 'react'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('email is',email);
    console.log('password is',password);

    setemail('')
    setpassword('');
    
    
  }



  return (
    <div className=' flex items-center justify-center h-screen w-screen'> 
        <div className=' border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            action="" className=' flex flex-col   items-center justify-center'>
              <input
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              required className='   outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 rounded-xl  ' type="email" name="email" id="" placeholder='Enter your email' />
              <input
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              required className='   outline-none mt-5 bg-transparent border-2 border-emerald-600 text-xl px-5 rounded-xl ' type="password" name="password" id="" placeholder='Enter your password' />
              <button className=' text-white outline-none mt-7  border-2 border-none bg-emerald-600 text-xl px-5 rounded-full cursor-pointer'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login