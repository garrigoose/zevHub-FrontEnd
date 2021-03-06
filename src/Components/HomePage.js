import React from 'react';
import Image from 'react-bootstrap/Image';
import HomePageCards from './HomePageCards';
import CategoryAccordian from './CategoryAccordian';
import headerImage from '../Images/94797-tesla-roadster-tesla-electric-cars-4k-hd.jpeg';
import CategoriesBar from './CategoriesBar';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container fluid className='w-100 p-0'>
      <CategoriesBar fluid className='d-sm-none d-md-none d-lg-block w-100' />
      <div id='header-image-div'>
        <Image src={headerImage} id='header-image'></Image>
      </div>
      <HomePageCards />
      {/* <CategoryAccordian /> */}
    </Container>
  );
};

export default HomePage;
