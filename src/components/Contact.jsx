import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { FooterContainer } from './styled/GlobalStyle'

export default function Contact() {
  return (
    <FooterContainer>
    <p>
      Hope you Enjoyed! Feel free to contact me
      <a href='https://www.linkedin.com/in/jahnoel-rondon/' target="_blank" rel="noreferrer" >
        <FaLinkedin />
      </a>
      <a href='https://github.com/JahnoelRondon' target="_blank" rel="noreferrer" >
        <FaGithub />
      </a>
    </p>
  </FooterContainer>
  );
}
