import Header from "./Header";
import Greeting from "./Greetings";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <Header
        name="Hans"
        userName="Hansimani"
        email="hans@hans.dk"
        age="34"
        status="Single"
      />
      <Greeting />
      <Button />
    </div>
  );
}
