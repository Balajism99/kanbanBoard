import React from 'react';
import Pdf from "react-to-pdf";
import App from '../App';

const ref = React.createRef();
const options ={
    orientation: "landscape",
    format: "a2"
}
const PDF = () => {
  return (
    <>
      <div className="Post" ref={ref}>
        <App />
      </div>
      <Pdf targetRef={ref} filename="post.pdf" options={options}>
        {({ toPdf }) => <button data-testid="btn" onClick={toPdf} className="btn btn-primary btn-lg">Preview</button>}
      </Pdf>
    </>
  );
}

export default PDF;