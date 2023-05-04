import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../../../public/images/banner.jpg'

const Banner = () => {
    return (
        <div>
             <Card className="bg-dark text-white">
      <Card.Img src={banner} alt="Card image" />
      <Card.ImgOverlay className='my-5 pt-5'>
        <h1>Welcome To FOodian</h1>
        {/* <Card.Title>Welcome To FOodina</Card.Title> */}
        <article className='w-50'>
        <h6>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          </h6>
        </article>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
};

export default Banner;