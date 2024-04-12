import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from "@mui/material";

function ToDoMui({ addTodo }) {
  const [text, setText] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={HandleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter here"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 5 }}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default ToDoMui;
