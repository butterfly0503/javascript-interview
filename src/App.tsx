import "./mock-api/mock-server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Persons from "./components/Persons";
import { usePersons } from "./hooks/usePersons";

export default function App() {
  const persons = usePersons();
  return (
    <div className="App">
      <Persons persons={persons} />
    </div>
  );
}
