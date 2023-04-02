import React from "react"
import Card from "./components/ContactCard.jsx"
import './components/ContactCard.css';



const cards = [
    {
      name: "Безлимитный 300",
      tarif: "300",
      razmer: "до 10 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      color: "blue"
    },
    {
      name: "Безлимитный 450",
      tarif: "450",
      razmer: "до 50 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      color: "green"
    },
    {
      name: "Безлимитный 550",
      tarif: "550",
      razmer: "до 100 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      color: "red"
    
    },
    {
      name: "Безлимитный 1000",
      tarif: "1000",
      razmer: "до 200 Мбит/сек",
      traffic: "Объем включенного трафика не ограничен",
      color: "black"
    }
  ]
  
  function App() {
    return (
      <div className="App">
        {
          cards.map((card) =>
            < Card name={card.name} tarif={card.tarif} razmer={card.razmer} traffic={card.traffic} color={card.color} />
          )
        }
  
      </div>
    );
  
  }
  
  export default App;