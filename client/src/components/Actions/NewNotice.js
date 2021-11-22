import axios from "axios";
import { useState } from "react";

export default function NewNotice() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/notices/new", {
        text,
        author,
        date: Date.now(),
      });
    } catch (error) {
      console.log("Unable to send POST to /notices/new");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Message
        <input type="text" onChange={(event) => setText(event.target.value)} />
      </label>
      <label>
        Author
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button type="submit">Add new notice</button>
    </form>
  );
}
