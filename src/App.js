import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import SearchMain from "./components/SearchMain";
function App() {
  return (
    <div className="app">      
      <Header />
      <UserInput />
      <SearchMain /> 
    </div>
  );
}

export default App;
