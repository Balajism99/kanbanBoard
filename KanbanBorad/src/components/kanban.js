import { columnView } from '../datas/column';
import React, {  useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Row, Container, Col } from "react-bootstrap";
import { IconButton, Snackbar } from '@material-ui/core';
import onDragEnd from '../validation/Dragend';
import jsPDF from 'jspdf';


export default function Kanban(){

    const [columns, setColumns] = useState(columnView);
    const [errors, setErrors]=useState();
    const [bar, setBar]=useState(false)
    const[ update, setUpdate]=useState(false)
   


  function barOpen(){
    setBar(true)
  }
  function barClose(){
    setBar(false)
    setErrors('')
  }
  
  function generatePreview(){
    var doc = new jsPDF("l", "pt", "a1")
    doc.html(document.querySelector("#content"),{
        callback : function(pdf){
            pdf.save('kanban.pdf')
        }
      })
    
  }
    return (
      
  <div className="main-div">
  
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
          onDragEnd={result => onDragEnd(result,  columns, setColumns,setErrors, setUpdate)}
        >
         
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
      
              <Container key={columnId} 
              >
                <h2 className="col-name">{column.name} </h2>
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
   <div>
   </div>
      </div>
    );

}

/*<PopUp trigger={true}>
     <h1>Epdi da panna pora</h1>
   </PopUp>

  <button onClick={screenshot} className="btn-primary">ScreenShot</button>

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
      
    };
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    <button className="btn-primary"  onClick={handleClickOpen}>Preview</button>
   
    { handleClickOpen ?(
      <Dialog className="popup" fullScreen open={open}  onClose={handleClose} TransitionComponent={Transition}>
      <div id="content">
    {preview}

      </div>
        <button className="btn-primary"  onClick={generatePreview}>  Download</button><br></br>
        <button className="btn-secondary"  onClick={handleClose}>  Cancel</button>
    </Dialog>
    ):""
       
    }

   */