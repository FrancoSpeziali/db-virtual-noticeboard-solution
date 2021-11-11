import { useEffect, useState } from "react";
import axios from "axios";

import Notice from "./Notice";

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function getNotices() {
      try {
        const response = await axios.get("http://localhost:3001/notices/all");
        if (!Array.isArray(response.data)) {
          throw "Server response not understood";
        }
        setNotices(response.data);
      } catch (error) {
        console.log(
          "Unable to send GET to /notices/all. Trying again in 1s..."
        );
      }
    }

    setInterval(() => {
      getNotices();
    }, 1000);
  }, []);

  return (
    <>
      {notices.map(({ text, author, date }) => (
        <Notice text={text} author={author} date={date} />
      ))}
    </>
  );
}
