import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Room() {
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState("");
  const [aboutRoom, setAboutRoom] = useState("");

  useEffect(() =>{
  axios.get("/api/bedrooms")

  .then((res)=>{
    setReserved(res.data)
  })

}, [])

  return (

      <div>   
      <>
        {setReserved.map(room =>
          <p key={room.reserved}>
          </p>
        )}
        </>
      </div>
      
  );
}
