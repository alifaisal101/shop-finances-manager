import './__ErrMsg.css';

const ErrMsg = (props) => {
  return <span className="error-msg">{props.children}</span>;
};

export default ErrMsg;
