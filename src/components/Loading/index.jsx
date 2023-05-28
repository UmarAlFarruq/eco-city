// import { Wrapper } from "./style";
import "./style.css";
const Loading = () => {
  return (
    <div className="container">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
