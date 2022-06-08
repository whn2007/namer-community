import React from 'react'
import Bean from "../assets/bean2.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style = {{backgroundImage: `url(${Bean})`}}
        ></div>
        <div className='rightSide'>
            <h1></h1>
            <form id = "contact-form" method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name = "name" placeholder="Enter full name..." type = "text"/>
                <label htmlFor='email'>Email</label>
                <input name = "email" placeholder="Enter full email..." type = "email"/>
                <label htmlFor='message'>Message</label>
                <textarea 
                rows= "6" 
                placeholder = "Enter Message..." 
                name = "message"
                required
                ></textarea>
                <button type='Submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact