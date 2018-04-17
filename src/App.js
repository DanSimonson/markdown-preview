import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  }

  markdownHandler = (markdown) => {
    this.setState ({markdown});
  }
  createMarkup() {
    return {__html: marked(this.state.markdown)};
  }
  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel> Markdown Input </ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Markdown" 
            value={this.state.markdown} onChange={(event) => this.markdownHandler(event.target.value)}></FormControl>
          </FormGroup>
        </div>
        <div> Preview </div>
        <div dangerouslySetInnerHTML={this.createMarkup()}>
        {/*dangerouslySetInnerHTML={{__html: marked(markdown)}}>*/}

        </div>
      </div>
    );
  }
}

export default App;
