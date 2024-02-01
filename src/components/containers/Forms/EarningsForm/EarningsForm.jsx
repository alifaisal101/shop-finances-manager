import './__EarningsForm.css';
import { useLocation } from 'react-router-dom';

const EarningsForm = () => {
  const earningId = useLocation();
  console.log(earningId);

  return (
    <div className="earnings-form-container">
      <h1>sad</h1>
    </div>
  );
};

export default EarningsForm;
