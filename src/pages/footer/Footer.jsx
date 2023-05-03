import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import img from '../../../public/images/recent.jpg'

const Footer = () => {
    return (


        <Row className=" bg-black text-light px-5 pt-3 rounded text-center">
            <Col cl>
                {/* <img src={rsz_two} alt="" /> */}
                <h1>FOodian</h1>
                <p>You Might Be Rest Assured That We Have<br />A Strong Reputation About Our Chefs<br />Corner. We Can Provide The Best<br />Service All Over The Country. <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam exercitationem nisi placeat rerum dolorum labore ut enim, repellendus perferendis? Ducimus cumque repudut alibusdam et voluptates cons cum ab, tempora .</span> </p>
            </Col>
            <Col className='text-center'>
                <h3>Recent Recepe</h3>
                <article>
                    <img className='img-fluid w-50 mb-2 mt-2' src={img} alt="" />
                    <div>
                        <p>Masala Rice</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum quod id sint ipsam fuga asperiores, alias debitis nihil hic?</p>
                    </div>
                </article>
            </Col>
            <Col className=" text-center">
                <h4>Contact Information</h4>
                <p>+880 123467890</p>
                <p>+880 125267858</p>
                <p>FOodianChef@gmail.com</p>
                <p>FOodian@gmail.com</p>
                <p>Dhaka Bangladesh</p>
            </Col>
            <Col className='text-center'>
                <h4>Menu</h4>
                <Nav.Link href="/">Chicken Parmesan
                </Nav.Link>
                <Nav.Link href="/blog">Chicken Tikka Masala
                </Nav.Link>
                <Nav.Link href="#link">Lobster Bisque
                </Nav.Link>
                <Nav.Link href="#link">Beef Stroganoff
                </Nav.Link>
                <Nav.Link href="#link">Chicken Alfredo
                </Nav.Link>
                <Nav.Link href="#link">Philly Cheesesteak
                </Nav.Link>
                <Nav.Link href="#link">Fish and Chips

                </Nav.Link>
                <Nav.Link href="#link">Kacchi
                </Nav.Link>
                <Nav.Link href="#link">Fried Rice


                </Nav.Link>
                <Nav.Link href="#link">Falafel Wrap

                </Nav.Link>
                <Nav.Link href="#link">Faluda
                </Nav.Link>
            </Col>
        </Row>

    );
};

export default Footer;