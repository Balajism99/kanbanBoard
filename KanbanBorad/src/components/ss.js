

/*

import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import ReactTOPdf from "react-to-pdf";
import Kanban from './kanban';

const ref = React.createRef();
const PDF = (props) => {
  return (
    <>
      <div className="background_color" >
        <div className="pdf_container" ref={ref} >
          <Kanban />
        </div>
        <ReactTOPdf targetRef={ref}>
          {({ toPdf }) => 
            <button onClick={toPdf} className="get_started">
              Download
            </button>
          }
        </ReactTOPdf>
      </div>
    </>
  )
}

export default PDF;




















import React, {useState} from 'react';
import { PDFDownloadLink, Document, Page,Text } from '@react-pdf/renderer'
import Kanban from './kanban';



const MyDoc = () => (
  <Kanban />
)

const Render = () => {
  const [data, setData] = useState();
  const clickHandler = (key) => {
    return (
      <PDFDownloadLink document={<MyDoc  />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : url)}
      </PDFDownloadLink> 
    )
  }

  return (
    <div>
      <button onClick={clickHandler}>SS</button>
    </div>
)
  }

export default Render;



















import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import Kanban from './kanban'
 
export default function SS () {
  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <div >
        <Kanban ref={ref} />
      </div>
    </div>
  )
}*/