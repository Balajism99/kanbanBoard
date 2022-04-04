import { useState } from "react";

const onDragEnd = (result, columns, setColumns, setErrors) => {
    if (!result.destination){
        return;
    }
    const valid =" Candidate must go through each and every levels, Cannot skip ahead";
     const validBack =" Cannot drag backwards ";
    const { source, destination} = result;
    const destColumn = columns[destination.droppableId];
    const sourceColumn = columns[source.droppableId];
    const dest = destColumn.no +1;
    const src = sourceColumn.no +2;
    const drag = dest-src;
   const destError=destColumn.no;
   const srcError= sourceColumn.no;
   const dragError=destError-srcError;
   console.log(drag)
if(dragError>1){
    setErrors(valid)
}
if(dragError<=-1){
  setErrors(validBack)
  
}
    console.log(drag)
   
    if(drag>=1){
        return;
    }
    if(drag<=-2){
        return
    }
    console.log(result)
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
      
      console.log(columns)

    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    
      console.log(columns)
    }

  };
  export default onDragEnd;


 