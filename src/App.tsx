import Navbar from "./components/layouts/Navbar";
import AppForm from "./components/layouts/AppForm";
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="flex">
      <Navbar />
      <AppForm />
    </div>
  );
};

export default App;
