import './__BudgetReportPrint.css';

import { PureComponent } from 'react';
import ReactToPrint from 'react-to-print';
import BudgetReportPrintContent from './BudgetReportPrintContent/BudgetReportPrintContent';

class BudgetReportPrint extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <a
                ref={(printLink) => {
                  this.props.getPrintLink(printLink);
                }}
              ></a>
            );
          }}
          content={() => this.componentRef}
        />
        <BudgetReportPrintContent ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default BudgetReportPrint;
