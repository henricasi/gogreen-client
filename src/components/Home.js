import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Message from './Message';

//TODO deixar featured recipes responsivo; mostrar uma de cada vez? wrap

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
      
      {
        this.props.message && <Message successMessage={this.props.successMessage} message={this.props.message}/>
      }

        <section className="d-flex justify-content-start align-items-start section1-container">
          <div className="section1-div">
            <h2>GoGreen</h2>
            <h4>Find and share V recipes</h4>
            <button type="button" className="btn btn-success">
              Let's begin
            </button>
          </div>
        </section>

        <section className='section2'>
          <div className="container-fluid">
            <div className="mt-5 mb-3 d-flex flex-column align-items-center">
              <h3 className="">How it works?</h3>
              <div className="div-bar"></div>
            </div>

            <div className="d-flex row justify-content-sm-around">
              <div className="col-sm section2-container">
                <img src="./images/chef-hat.png" alt="fork" />
                <h4 className="hello">Be the chef</h4>
                <p className="text-muted">
                  Share your way of cook in a step-by-step recipe
                </p>
              </div>

              <div className="col-sm section2-container">
                <img src="./images/cook.png" alt="fork" />
                <h4 className="hello">Find the ideal recipe</h4>
                <p className="text-muted">
                  Over 1,000 vegan, vegetarian and wolrdwide recipes for all
                  levels
                </p>
              </div>

              <div className="col-sm section2-container">
                <img src="./images/powder.png" alt="fork" />
                <h4 className="hello">Fork and improve their recipes</h4>
                <p className="text-muted">
                  As an open-source recipes base, GoGreen allow users suggesting
                  improvements to other chefs' recipe
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container-fluid featured-recipes mt-5"
          style={{ width: "85%" }}
        >
          <div className="mt-5 mb-2 d-flex flex-column align-items-center">
            <h3 className="">How skilled do you feel today?</h3>
            <div className="div-bar"></div>
          </div>

          <div className="row">
            <div className="col-sm">
              <Link to="/recipe/5e384386b742f83ceec52f23" className="recipe-link">
                <article
                  className="feat-recipe d-flex justify-content-center align-items-end"
                  style={{
                    backgroundImage: 'url("./images/home-images/pasta.jpg")',
                    backgroundSize: "cover",
                    height: "45vh"
                  }}
                >
                  <div className="text-box">
                    <h2 className="recipe-name">Creamy Avocado Pasta</h2>
                  </div>
                </article>
              </Link>
              <div className="difficulty-link">
                <Link to="/allrecipes">
                  <div className="difficulty icon">
                    <img src="" alt="" />
                  </div>
                  <h4 className="difficulty-text">Just starting out?</h4>
                  <p>
                    See more <strong>Easy</strong> recipes
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-sm">
              <Link to="/recipe/5e384386b742f83ceec52f43" className="recipe-link">
                <article
                  className="feat-recipe d-flex justify-content-center align-items-end"
                  style={{
                    backgroundImage: 'url("./images/home-images/burger.jpeg")',
                    backgroundSize: "cover",
                    height: "45vh"
                  }}
                >
                  <div className="text-box">
                    <h2 className="recipe-name">Bean Burgers with Spicy Guacamole</h2>
                  </div>
                </article>
              </Link>
              <div className="difficulty-link">
                <Link to="/allrecipes">
                  <div className="difficulty icon">
                    <img src="" alt="" />
                  </div>
                  <h4 className="difficulty-text">Get a meal ready in minutes</h4>
                  <p>
                    See more <strong>Medium</strong> recipes
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-sm">
              <Link to="/recipe/5e384386b742f83ceec530d8" className="recipe-link">
                <article
                  className="feat-recipe d-flex justify-content-center align-items-end"
                  style={{
                    backgroundImage: 'url("./images/home-images/lentil.jpg")',
                    backgroundSize: "cover",
                    height: "45vh"
                  }}
                >
                  <div className="text-box">
                    <h2 className="recipe-name">Red Lentils and Spinach in Masala Sauce</h2>
                  </div>
                </article>
              </Link>
              <div className="difficulty-link">
                <a href="">
                  <div className="difficulty-icon">
                    <img src="" alt="" />
                  </div>
                  <h4 className="difficulty-text">Feeling adventurous?</h4>
                  <p className="difficulty-link">
                    See more <strong>Hard</strong> recipes
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


// trazer getmessage e success message -> para rendererizar condicional
// passar o message