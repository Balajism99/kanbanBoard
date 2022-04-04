import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Kanban from './kanban';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);
  const errors=""
  const handleClickOpen = () => {
    setOpen(true);
    html2canvas(document.getElementById("content")).then(function(canvas){
      document.getElementById("pop").appendChild(canvas)
       }
       )
  };

  const handleClose = () => {
    setOpen(false);
  };

  function generatePreview(){
    var doc = new jsPDF("l", "pt", "a1")
    doc.html(document.querySelector("#content"),{
        callback : function(pdf){
            pdf.save('kanban.pdf')
        }
      })
  }
  return (
    <div  >
        <button className="btn-primary"  onClick={handleClickOpen}>Preview</button>
        <div id="content" >
          {
            errors ? (
        <Kanban />

            ): ""
          }
          </div>
      <Dialog className="popup" id="popup" fullScreen open={open}  onClose={handleClose} TransitionComponent={Transition}>
      <div className='pop'id='pop'>
      </div>
          <button className="btn-primary"  onClick={generatePreview}>  Download</button><br></br>
          <button className="btn-secondary"  onClick={handleClose}> Cancel</button>
      </Dialog>
    </div>
  );
}






 /*
  var preview = html2canvas(document.getElementById("content")).then(function(canvas){
document.body.appendChild(canvas)
  }
  )

 var html = html2canvas(document.getElementById("content")).then(function(canvas){
    var myImage = canvas.toDataURL("image/png");
    window.open(myImage);
    }
)

   var preview =
    html2canvas(document.getElementById("content")).then(function(canvas){
    
     document.body.appendChild(canvas)
      }
      )
      function append(){
        html2canvas(document.getElementById("content")).then(function(canvas){
    
          document.getElementById().replaceChild(canvas)
           }
           )
      }


  let doc = new PDFDocument()
let stream = doc.pipe(BlobStream())
doc.moveDown(0.5).fontSize(8)
doc.querySelector("#content")
stream.on('finish', ()=>{
  let blob = stream.toBlob('application/pdf')
  FileSaver.saveAs(blob, 'myPDF.pdf')

})
doc.end()


 var preview = html2canvas(document.getElementById("content")).then(function(canvas){
    let dataURL = canvas.toDataURL('image/png');
    var doc = new jsPDF()
     var docPreview = doc.addImage(dataURL, 'PNG', .6, .6);
}
  )*/





/*

 <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
        */