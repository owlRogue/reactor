import React from 'react';
import './Wrapper.css';

class Wrapper extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.props.children}
          </div>
        );
      }
    }