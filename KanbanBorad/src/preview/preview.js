import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import App from '../App';


export default function Preview() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <App ref={componentRef.innerRef} />
      <button className="preview-btn" onClick={handlePrint}>Preview</button>
    </div>
  );
};