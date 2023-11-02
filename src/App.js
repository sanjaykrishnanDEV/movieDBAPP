import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import SearchMain from "./components/SearchMain";
import { Routes, Route } from "react-router-dom";
import FiniteDetails from "./components/FiniteDetails";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/movies" element={<SearchMain />} />
        <Route path="/trending" element={<UserInput />} />
        <Route path="/" element={<Home />} />
        <Route path="/details/:userId" element={<FiniteDetails />} />
      </Routes>
      {/* <UserInput />
      <SearchMain /> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
function Home() {
  return (
    <div className="app">
      <Header />
      <UserInput />
      <SearchMain />
    </div>
  );
}
