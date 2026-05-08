import "./App.css";
//import 
import Title from "./Title.jsx";
// import {Title} from "./Title.jsx";
// function Title() {
//   return <h1>I m Dany !</h1>;
// }
function Description(){
  return <h3>Im the description !</h3>
}

function App() {
  // return <h1>Hello World ! </h1>;
  // return <button>hello world!</button>;

  return (
    <div className="mainbox">
      <h1>This is my App component </h1>
      <p>inside app component we have :</p>
      <Title></Title>
      <Description></Description>
      <Title></Title>
      <Description></Description>

    </div>
  );
  // we cant use class attribute of html in jsx markup cuz class is special reserved keyword in js so class means 
  // class in javascript it is neither attribute we can use alternative names like className but in camelCase format 
}

export default App;
// export  Title;
