import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        /* jshint ignore:start */
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
        /* jshint ignore:end */
      );
    }
  }

export default Subject;