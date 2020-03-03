import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, CheckBox } from "grommet";
import queryString from "query-string";
import { Checkbox } from "react-bootstrap";
import { InputGroupCheckbox } from "react-bootstrap/InputGroup";

export default function Schedule() {
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState("");
  const [aboutRoom, setAboutRoom] = useState("");
  const id = queryString.parse(window.location.search).id;

  useEffect(() => {}, []);

  return (
    <Box direction="row" background="blue" pad="medium">
      <div>
        <input
          value={name}
          type="text"
          name="name"
          onChange={({ target }) => setName(target.value)}
          placeholder="Enter name to call Dibs!"
        ></input>
        <input
          value={aboutRoom}
          type="text"
          name="aboutRoom"
          onChange={({ target }) => setAboutRoom(target.value)}
          placeholder="Room Description"
        ></input>
        <button
          type="button"
          onClick={e => {
            e.preventDefault();

            fetch(`/api/bedrooms`, {
              method: "POST",
              body: JSON.stringify({
                reserved: true,
                name: name,
                aboutRoom: aboutRoom,
                TripId: id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => res.json())
              .then(res => console.log(res));
          }}
          label="Dibs!"
        />
      </div>
    </Box>
  );
}
