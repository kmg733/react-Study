import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
      return (
        /* jshint ignore:start */
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
        /* jshint ignore:end */
      );
    }
}

export default ReadContent;