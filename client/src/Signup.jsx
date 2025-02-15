import { useState } from "react";
import './App.css';
import Input from './component/Input';
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit= (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/register',{name, email, password })
    .then(result => {
      setMessage("sign successfull");
      console.log(result)})
    .catch(err=> {
      setMessage("Signup failed. Please try again.");
      console.log(err)})
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center'>
        <h2 className='text-xl font-bold mb-4'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='mb-2 w-full'/>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='mb-2 w-full'/>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='mb-4 w-full'/>
          <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
            Sign Up
          </button>
        </form>
        {message && <p className='mt-4 text-center text-red-500'>{message}</p>}
        </div>
    </div>
  );
}

export default Signup;
