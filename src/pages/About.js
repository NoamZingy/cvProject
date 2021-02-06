import React, { useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { FaQuoteRight } from 'react-icons/fa'
import data from '../dataForAbout'
import dataCv from '../dataForCv'
import "bootstrap/dist/css/bootstrap.min.css"; 
import AboutQuestion from './about-question';

function About() {
  const people = data
  const [index, setIndex] = React.useState(0)


  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
    <div className='about-container'>
    <div className="about-header">
<h2>My Resume</h2>
    </div>
    </div>
    <div className='info'>
    {dataCv.map((question) => {
      return (
        <AboutQuestion key={question.id} {...question}></AboutQuestion>
      );
    })}
    </div>
  <section className='section mt-5'>
      <div className='title'>
        <h2 >
          <span className='about-span'>/</span>motivational quotes
        </h2>
      </div>
      <div className='section-center-about'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4 className='about-h4'>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    </>
  )
}

export default About
