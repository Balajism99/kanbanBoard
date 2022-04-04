import React  from "react";

import Kanban from "./components/kanban";
import FullScreenDialog from "./components/PopUp";
import PDF from "./components/ss";
import Render from "./components/ss";
import SS from "./components/ss";



export default function App() {
 return(
   <div>
     <Kanban />
     <FullScreenDialog />
   </div>
 )
}














/*



 var string = doc.output('datauristring');
 var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
 document.open();
 document.write(embed);
 document.close();






https://makitweb.com/take-screenshot-of-webpage-with-html2canvas/






<Snackbar className="bar" anchorOrigin={{vertical:"top", horizontal:"center"}} open={barOpen} onClose={barClose}   autoHideDuration={4000} >
<Alert severity="error" className="message">{errors}
<IconButton key="close" aria-label="Close" color="inherit" onClick={barClose} autoHideDuration={6000}>X</IconButton>
   <button className="btn btn-primary" onClick={generatePdf}>Preview</button>
  
</Alert>
   </Snackbar>

   */
//
/*pdf.save("mypdf.pdf")
  
  function generatePdf(){
    var doc = new jsPDF("l", "pt", "a1")
    doc.html(document.querySelector("#content"),{
      callback : function(pdf){
        
        var string = doc.output('datauristring');
        var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
        var preview = window.open();
        preview.document.open();
        preview.document.write(embed);
        preview.document.close();
      }
    })
  }

   
<div>
      <h1  className="error"><u>{errors}</u></h1>
    <div className="main-comp">
      <DragDropContext
        onDragEnd={result => onDragEnd(result,  columns, setColumns,setErrors)}
      >
       
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
    
            <div className="main-col" key={columnId} 
            >
              <h2>{column.name} </h2>
              <div className="col">
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      
                      <div className="col-1"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              
                              {(provided, snapshot) => {
                                return (
                                  <div
                                  className="col-2"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      background: column.color,
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                   Name: {item.content} {column.icon} <br></br>
                                   Reg-No: {item.regNo}<br></br>
                                   Dept: {item.dept}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                     
                    );
                  
                  }}
                </Droppable>
              </div>
            </div>
            
          );
        })}
      </DragDropContext>
    </div>
   <button className="preview-btn" onClick={generatePdf}>Preview</button>
    </div>

    
<div>
  {errors ?(
   <Snackbar className="bar" severity="error" anchorOrigin={{vertical:"top", horizontal:"center"}} open={barOpen} onClose={barClose} color="red"  autoHideDuration={4000} 
   message={<span  className="message">{errors}</span>}
   action={[
     <IconButton key="close" aria-label="Close" color="inherit" onClick={barClose} autoHideDuration={6000}>X</IconButton>
   
   ]}   >
   </Snackbar>
  ):
  (
    <span></span>
  )
}

    <div className="main-comp" id="content">
   
      <DragDropContext
        onDragEnd={result => onDragEnd(result,  columns, setColumns,setErrors)}
      >
       
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
    
            <Container key={columnId} 
            >
              <h2>{column.name} </h2>
              <Row>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      
                      <Col auto className="col-1"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              
                              {(provided, snapshot) => {
                                return (
                                  <Col auto   className="col-2"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      background: column.color,
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                   Name: {item.content} {column.icon} <br></br>
                                   Reg-No: {item.regNo}<br></br>
                                   Dept: {item.dept}
                                  </Col>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Col>
                     
                    );
                  
                  }}
                </Droppable>
              </Row>
            </Container>
            
          );
        })}
      </DragDropContext>
    </div>
    <button className="preview-btn" onClick={generatePdf}>Preview</button>
    </div> */