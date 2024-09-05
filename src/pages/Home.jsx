import React from 'react';
import Button from '../components/button';
import logo from '../assets/logo.png';
import doctorImage from '../assets/doctor.png';
import {
  Container,
  LogoWrapper,
  Logo,
  ButtonGroup,
  ImageWrapper,
  Image,
} from '../styles/HomeStyles';

const Home = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} alt="med plus" />

      </LogoWrapper>
      <ImageWrapper>
        <Image src={doctorImage} alt="Doctor" />
      </ImageWrapper>
      <ButtonGroup>
          <Button>Log In</Button>
          <Button>Register</Button>
        </ButtonGroup>
    </Container>
  );
};

export default Home;
