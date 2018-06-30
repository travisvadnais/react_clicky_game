import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Jumbotron from './components/Jumbotron/';
import PersonCard from './components/PersonCard/PersonCard.js';
import Footer from './components/Footer/'
import hitlist from './terms.json';
import './App.css';


class App extends Component {

  state = {
    hitlistClicked: [],
    directions: "Click a picture to start!",
    score: 0,
    hi_score: 0
  }

  //This fx is called from PersonCard.js on click events.  It takes in the ID of the person clicked
  calculateScore = (id) => {
    //Check to see if the ID of the clicked person is already in the array
    if (this.state.hitlistClicked.indexOf(id) === -1) {
      //If so, add 1 to the score & add the id to the array
      let score = this.state.score + 1;
      let hi_score = this.state.hi_score;
      //Also check the high score.  If it's less than the score, change it to the score.
      if (hi_score < score) {
        hi_score = score
      };
      this.setState({
        score: score,
        hi_score: hi_score,
        directions: "Good Job!",
        //ES6 array magic here. It's essentially a push into the array.
        hitlistClicked: [id, ...this.state.hitlistClicked]
      });
    }
    //If not, set the score to 0 and empty the array
    else {
      this.setState({
        score: 0,
        hitlistClicked: [],
        directions: "Wrong - Try Again!"
      })
    }
  }

  //This will render whenever there's a state change (or page load)
  render() {
    return (
      <div className="container">
        <Navbar 
          item1="You're Fired!"
          score={this.state.score}
          hi_score={this.state.hi_score}
          directions={this.state.directions}
        />
        <Jumbotron>
          <h2>Test Your Memory!</h2>
          <hr/>
          <br/>
          <h5>Trump has fired so many people that he's lost track and needs your help remembering who he's canned. </h5>
          <br/><br/>
          <h5>Your goal is to click each of the photos below to remind Trump who he's fired - but don't click the same one twice or you'll be added to the list!</h5>
        </Jumbotron>
        {/* mx-auto will center the div on the page and 'justify-content-center' will center the content WITHIN the div*/}
        <div className="d-flex flex-wrap justify-content-center col-lg-10 mx-auto carousel">
          {
            hitlist
            // Sort the array of people randomly
            .sort(() => 0.5 - Math.random())
            // Generate a card for each person in the JSON array
            .map(fired_guy => (
              <PersonCard
                id={fired_guy.id}
                key={fired_guy.id}
                name={fired_guy.name}
                mugshot={fired_guy.mugshot}
                // Passing in the fx as a prop so that it can be called in the PersonCard
                calculateScore={this.calculateScore}
              />
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
