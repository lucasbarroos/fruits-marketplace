import React from 'react';
import HeroImage from '../../public/images/orange.jpeg';

import {
  Container,
  BackgroundImage,
} from './styles';

const Hero = () => (
  <Container>
    <BackgroundImage
      alt="orange-wallpaper"
      src={HeroImage}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </Container>
);

export default Hero;
