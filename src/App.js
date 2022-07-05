import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
     <Header />
     <h1>Produtos</h1>
     <main>
      <Card />
      <Card />
      <Card />
     </main>
    </div>
  );
}

export default App;
