import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <CardsList />
    </div>
  );
}

const CardsList = () => {
  const [cardList, setCardList] = useState([]);

  const handleCardCreateClick = () => {
    cardList.push({
      user: "Sujal",
      title: "Another card",
    });
    const newCardList = Array.from(cardList);
    // const newCardList = [...cardList];
    console.log({ cardList });
    setCardList(newCardList);
  };

  return (
    <div className="card-container">
      {cardList.map((cardObject) => (
        <TaskCard user={cardObject.user} title={cardObject.title} />
      ))}
      <button onClick={handleCardCreateClick}>+ Create</button>
    </div>
  );
};

const CardCreateButton = () => {
  return (
    <div>
      <button className="create-card">Create</button>
    </div>
  );
};

const TaskCard = (props) => {
  const { user, title } = props;
  return (
    <div className="task-card">
      <div>{user}</div>
      <div>{title}</div>
    </div>
  );
};
export default App;
