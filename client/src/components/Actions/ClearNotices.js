import axios from "axios";

export default function ClearNotices() {
  const clearNotices = async () => {
    try {
      await axios.delete("http://localhost:3001/notices/clear");
    } catch (error) {
      console.log("Unable to send DELETE to /notices/clear");
    }
  };

  return <button onClick={clearNotices}>Clear Notices</button>;
}
