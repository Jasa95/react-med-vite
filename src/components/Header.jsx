export default function Header({ name, userName, email, age, status }) {
  return (
    <header>
      <ul style={{ listStyleType: "none", marginLeft: "0px" }}>
        <li>Hej {name}!</li>
        <li>Dit Username: {userName},</li>
        <li>Din Email: {email},</li>
        <li>Din alder: {age},</li>
        <li>Satus: {status}.</li>
      </ul>
    </header>
  );
}
