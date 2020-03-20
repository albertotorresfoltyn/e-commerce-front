import React from 'react';
import { withRouter } from 'react-router';

let globalHistory = null;
class Spy extends React.Component {
  constructor(props) {
    super(props)
    globalHistory = props.history; 
  }

  componentDidUpdate() {
    globalHistory = this.props.history;
  }

  render(){
    return null;
  }
}

export const GlobalHistory = withRouter(Spy);

// export react-router history
export default function getHistory() {    
  return globalHistory;
}