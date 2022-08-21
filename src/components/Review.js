import people from '../data'
import {FaChevronRight, FaChevronLeft, FaQuoteRight} from 'react-icons/fa'
import { useState } from 'react'

export default function Review() {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = number => {
        if(number > people.length - 1) return 0
        else if(number < 0) return people.length-1
        else return number
    }
    const prevPerson = () => {
        setIndex(checkNumber(index - 1))
    }
    const nextPerson = () => {
        setIndex(checkNumber(index + 1))
    }
    const randomPerson = () => {
        let randomNum = Math.floor(Math.random() * people.length)
        if(randomNum === index) {
            randomNum = index + 1
        }
        setIndex(randomNum)
    }
    return <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'><FaQuoteRight /></span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
        </div>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
}