import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <h1>Root</h1>
    </div>
  );
}
