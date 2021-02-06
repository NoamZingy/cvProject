import React, { useState} from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
} from 'react-icons/fa'
import img from '../images/contactImg.jpg'


function Contact() {
 const person = {
   Number: '0506387608',
   Name : "Noam Zingboim",
   Age: '23',
   Email: 'nnnoamzingboim@gmail.com',
   Address: 'Gimzo haalon 17',
 }
  const [value, setValue] = useState('Noam Zingboim')
  const [title, setTitle] = useState('name')
  
  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }
  return (
    
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container-contact'>
          <img
            src={img}
            alt='random user'
            className='container-img'
          />
          <p className='user-title'>My {title} </p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='Name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='Email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='Age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='Address'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='Number'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
