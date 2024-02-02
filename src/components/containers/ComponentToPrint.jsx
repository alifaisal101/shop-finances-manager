import './_Print.css';

import React from 'react';
export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="printed-content-container">
        <h1>aaaa</h1>
      </div>
    );
  }
}
