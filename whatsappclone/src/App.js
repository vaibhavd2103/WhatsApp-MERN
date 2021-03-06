import logo from "./logo.svg";
import "./App.css";
import styles, { Background, Title, Image, Input } from "./styles";
import redblue from "./assets/redblue.jpg";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <div className="App_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;

/*
<div className="App">
      <Background>
        <Title>Hello World</Title>
        <img src={redblue} alt="this is an image" className="Image"></img>
      </Background>
    </div>
*/

/*

      <Title>LOGIN PAGE</Title>
      <input placeholder="Enter your email" className="EmailInput" />
      <input placeholder="Enter your password" className="PasswordInput" />
      <button title="Login" className="LoginButton">
        Login
      </button>
      <img src="https://wallpaperaccess.com/full/5113.jpg" className="Image" />

*/
