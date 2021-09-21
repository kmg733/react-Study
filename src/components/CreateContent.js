import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return (
        /* jshint ignore:start */
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" 
          onSubmit={function(e) {
            e.preventDefault();       
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            // eslint-disable-next-line
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
        /* jshint ignore:end */
      );
    }
}

export default CreateContent;