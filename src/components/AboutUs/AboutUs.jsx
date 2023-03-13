import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./AboutUs.css"
import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from '../Footer/Footer';

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className='about-us'>
        <p className='para-1'>
          Welcome to AnswerAce - the ultimate app for getting answers to all your questions! Our app is built using React JS
          and powered by the OpenAI API, providing you with accurate and reliable answers to your questions in no time.
          With our easy-to-use interface, you can simply ask any question you have in mind and let AnswerAce do the rest.
        </p>

        <p className='para-2'>We believe that communication should be effortless, and that's why we have designed AnswerAce to function like
          a conversation between two people. Our app is intuitive, user-friendly, and provides a seamless experience to our users.
        </p>
        <p className='para-5'>
          We understand that sometimes, even the best technology can falter, and that's why we have provided you with the option to
          reach out to us if you encounter any issues or if you have any questions. Our team is always here to assist you, and we can
          be reached at <a href='mailto:katare27451@gmail.com'>our email</a>.
        </p>

        <p className='para-3'>
        AnswerAce is entirely reliant on the OpenAI API to provide its functions. In order to utilize the features of this website,
        it is necessary for users to use their own personal API key.
        </p>
        <p className='para-4'>
          You can join me and my learnings here: 
            <a className='social-icons' style={{marginLeft: "12px"}} href='https://www.linkedin.com/in/shivam-katare-aa80b218b/' target="_blank"><FaLinkedin /></a>
            <a className='social-icons' style={{marginLeft: "12px"}} href='https://github.com/Shivam-Katare' target="_blank"><FaGithub /></a>
            <a className='social-icons' style={{marginLeft: "12px"}} href='https://twitter.com/Shivamkatare_27' target="_blank"><FaTwitter /></a>
            <a className='social-icons' style={{marginLeft: "12px"}} href='https://www.showwcase.com/shivam-katare' target="_blank"><FaGlobe /></a>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs