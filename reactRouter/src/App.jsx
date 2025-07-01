import Card from "./components/custom.jsx";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen ">
      <header className="border-b-1 border-gray-200 p-4">
        <nav className="flex justify-center">
          <ui className="flex list-none gap-10 font-semibold text-black-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ui>
        </nav>
      </header>

      <main className="grid grid-cols-5 justify-center gap-10 m-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
