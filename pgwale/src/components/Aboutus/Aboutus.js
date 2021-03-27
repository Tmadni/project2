import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "../Home_components/Navbar";
import "./Aboutus.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Contact from "./Contact";
export default function Aboutus() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 250,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container aboutus">
        <div className="row">
          <div className="col-md-6 col-12 my-auto">
            <div data-aos="fade-up-right">
              <img
                src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-12 my-auto">
            <div data-aos="fade-up-left">
              <h1 className="display-4 text-center my-5">About Us </h1>
              <p className="lead text-justify text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas officia eligendi dolorem molestias nesciunt aliquam
                deserunt velit fuga quidem atque?
              </p>

              <div className="text-center col-md-6 col-12 mx-auto">
                <Link
                  to="./Contact"
                  className="btn btn-outline-dark btn-block btn-lg my-5"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about_company">
          <h1 className="display-4">About Company</h1>
          <div className="pt-4">
            <p className="about_info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              illum delectus sequi necessitatibus cum laudantium incidunt
              minima, voluptatibus voluptas repellat officia doloremque magnam
              quis, accusamus tenetur, quasi doloribus iusto quia distinctio
              labore optio reprehenderit aperiam suscipit dignissimos aliquid!
              Odit distinctio quam, excepturi repellendus sunt magni adipisci
              sit architecto placeat tempore numquam, ipsam nobis vitae aperiam
              reprehenderit inventore ipsum facilis? Sapiente iure id explicabo.
              Omnis, architecto quaerat! Architecto error ducimus consequuntur,
              asperiores fugiat nostrum veniam eaque aspernatur ab quas aliquam
              ipsa! Odit expedita voluptate, mollitia tenetur eveniet quisquam a
              veritatis. In, odit. Enim aliquid voluptates vitae pariatur
              facilis beatae odio labore est, voluptatem officiis! Maiores, iure
              molestias aliquam suscipit rem impedit veritatis architecto
              delectus molestiae tempora inventore beatae consectetur facere
              voluptas dolores labore, laboriosam officiis non alias minima
              dolorum fuga corrupti blanditiis. Laudantium consequatur,
              aspernatur beatae dicta atque labore. Molestiae illum, possimus,
              officia sit nihil, cupiditate nesciunt, consequatur nulla deleniti
              veniam modi maxime impedit delectus iste totam earum vel
              repellendus doloribus in quae fuga. Dignissimos, unde eius
              voluptatem iusto est nesciunt quaerat temporibus velit doloribus a
              id laborum repellendus fugit nihil, animi facilis quisquam nemo
              tempora accusantium doloremque libero magnam dolorum veritatis vel
              aspernatur. Enim reiciendis laborum, expedita illum, aliquam
              eaque!
            </p>
          </div>
        </div>
        <div className="testimony">
          <h1 className="display-4 mb-4">We never comprmise on</h1>
          <div className="row mb-5">
            <div className="col-md-10 col-12 mx-auto">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.b1florence.com/wp-content/uploads/sites/295/2015/03/be_one_junior_suite_slide_03-800x400.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>World class Rooms</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.crownhotelcallander.co.uk/images/dine2.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>All varites of food</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.mortgageintroducer.com/wp-content/uploads/2015/12/family.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>24x7 Customer Support</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="team">
          <h1 className="display-4">Our Team</h1>
        </div>
        <div data-aos="zoom-in-up">
          <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">CEO</h5>
                  <div className="card-text text-black-50">
                    {" "}
                    Chole Hall<p className="float-right">5 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Senior Business Analyst</h5>
                  <div className="card-text text-black-50">
                    Ethen Thomas <p className="float-right">5 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Manager</h5>
                  <div className="card-text text-black-50">
                    Jacqueline Currey <p className="float-right">8 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light  p-5">
          <h1 className="text-center">Our Famous Customers Saying</h1>

          <div className="review">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <h2>Ariana Grande</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h2>Dwayne Johnson</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h2>George Clooney</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="card">
                  <h2>Michael Jordan</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h2>David Beckham</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h2>Justin Bieber </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint pariatur atque id incidunt velit cum omnis sed ut
                    voluptatem, assumenda quae neque similique deserunt alias
                    fugiat dolorem adipisci fugit excepturi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
