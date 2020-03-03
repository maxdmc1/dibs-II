import React, { useState, useEffect } from "react";
import { Box, CheckBox } from "grommet";
export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <Box>
        <div>
          <input
            value={groceryList}
            type="text"
            name="groceryList"
            onChange={({ target }) => setGroceryList(target.value)}
            placeholder="Add to your Grocery List"
          ></input>
          <button />
        </div>
      </Box>
    </>
  );
}
