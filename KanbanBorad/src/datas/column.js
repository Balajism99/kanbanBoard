import  {v4 as uuid} from "uuid";
import { datas} from "./data";



export const columnView = {
    [uuid()]: {
      name: "Screening",
      items: datas,
      //icon: "⭕️",
      color:"rgb(88, 88, 175)" ,
      no:1
    },
    [uuid()]: {
      name: "Written Test",
      items: [],
      //icon: "✍🏻",
      color:"rgb(155, 146, 72)",
      no:2
    },
    [uuid()]: {
      name: " HR",
      items: [],
      //icon: "⏳",
      color:"black",
      no:3
    },
    [uuid()]: {
      name: "Selected",
      items: [],
     // icon: "✅",
      color:"green",
      no:4
    },
    [uuid()]: {
      name: "Offer Letter ",
      items: [],
     // icon: "📝",
      color:"rgb(32, 114, 180)",
      no:5
    }
  };