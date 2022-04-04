/*import React, {  useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnView } from '../datas/column';
import onDragEnd from '../validation/Dragend';
import { Row, Container, Col } from "react-bootstrap";


export default function DraggableBoard(){
    const [columns, setColumns] = useState(columnView);
    const [errors, setErrors]=useState();
    return(

        <DragDropContext
        onDragEnd={result => onDragEnd(result,  columns, setColumns,setErrors)}
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
    )
}*/