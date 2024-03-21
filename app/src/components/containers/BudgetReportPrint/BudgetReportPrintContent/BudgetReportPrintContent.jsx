import { PureComponent } from 'react';
import './__BudgetReportPrintContent.css';

export class BudgetReportPrintContent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.budgetData);
    return (
      <div className={'printed-content-container ' + this.props.className}>
        <h1>aaaa</h1>
      </div>
    );
  }
}

export default BudgetReportPrintContent;
