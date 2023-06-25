
import './App.css';
import Header from './companent/Header';
import Main from "./companent/Main" ;
import Card from "./companent/Card";
const card = [
  {
    id: 1,
    image:"./img",
    lName:"HTML",
    lHour:"10:00 am"
  }
]

function App() {
  return (
    <div >
      <Header />
      <Main />
      <Card />

    </div>
  );
}

export default App;
