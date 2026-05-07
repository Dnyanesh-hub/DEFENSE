import "./App.css";
//import 

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
    <div>
      <h1>This is my App component </h1>
      <p>inside app component we have :</p>
      <Title></Title>
      <Description></Description>
      <Title></Title>
      <Description></Description>

    </div>
  );
}

export default App;
// export  Title;
