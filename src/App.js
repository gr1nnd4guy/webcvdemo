
import "./App.css";
import Profile from "./Components/Profile";
import Employments from "./Components/Employments";
import Educations from "./Components/Educations";
import Skills from "./Components/Skills";
import Language from "./Components/Language";
import Header from "./Components/Header";
import Line from "./Components/Line";
import DarkModeButton from "./DarkModeButton";


function App() {
  
  return (
    <div
      className="container p-4 mt-4 mb-4 change-color"
      id="plate1"
      
    >
      <DarkModeButton/>
      
      <Header/>
      <Line/>
      <Profile/>
      <Line/>
      <Employments/>
      <Line/>
      <Educations/>
      <Line/>
      <Skills/>
      <Line/>
      <Language/>
    </div>
  );
}

export default App;
