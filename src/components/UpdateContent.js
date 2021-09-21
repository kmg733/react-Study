import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
      /* jshint ignore:start */
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post" 
        onSubmit={function(e) {
          e.preventDefault();       
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc
            );
          // eslint-disable-next-line
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}          
              onChange={this.inputFormHandler}    
          ></input>
          </p>
          <p>
            <textarea
              onChange={this.inputFormHandler}    
              name="desc"
              placeholder="description"
              value={this.state.desc}
            ></textarea>
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

export default UpdateContent;