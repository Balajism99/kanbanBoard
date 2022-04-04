

const onDragEnd = (result, columns, setColumns, setErrors) => {
    if (!result.destination){
        return;
    }
    const valid =" CANDIDATE MUST GO THROUGH EACH AND EVERY LEVELS, CANNOT SKIP AHEAD ";
     const validBack =" CANDIDATE MUST GO THROUGH EACH AND EVERY LEVELS, EVEN BACKWARDS ";
    const { source, destination} = result;
    const destColumn = columns[destination.droppableId];
    const sourceColumn = columns[source.droppableId];
    const dest = destColumn.no +1;
    const src = sourceColumn.no +2;
    const drag = dest-src;
   const destError=destColumn.no;
   const srcError= sourceColumn.no;
   const dragError=destError-srcError;
   console.log(dragError)
if(dragError>1){
    setErrors(valid)
}
if(dragError<-1){
    setErrors(validBack)
}
    console.log(drag)
   
    if(drag>=1){
        return;
    }
    if(drag<-2){
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
    }

  };
  export default onDragEnd;


  /*

      icon: "⭕️",
      icon: "✍🏻",
      icon: "⏳",
      icon: "✅",

       icon: "📝",





  */