import React from 'react'

const Contact = () => {
  return (
    <div>

      <div className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl  font-bold mb-6 text-center' data-aos="fade-up">contact us</h2>
        <form >
          <input  className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' type="text"  placeholder='full name' required/>
          <input  className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-m' type="email" placeholder='email' required/>
          <input className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-m' type="text"  placeholder='phone number'/>
          <textarea  className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-m' placeholder='your message' rows={5} required></textarea>
          <button  className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-m' type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
