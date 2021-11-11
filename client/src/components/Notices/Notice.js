export default function Notice({ text, author, date }) {
  return (
    <ul>
      <li>{text}</li>
      <li>
        {author}, {new Date(date).toLocaleDateString()}
      </li>
    </ul>
  );
}
