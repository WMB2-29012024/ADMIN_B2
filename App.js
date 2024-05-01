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
      user: "",
      title: "",
    });
    const newCardList = Array.from(cardList);
    setCardList(newCardList);
  };

  return (
    <div className="card-container">
      {console.log("in return")}

      {cardList.map((cardObject, idx) => (
        <TaskCard
          idx={idx}
          cardsListState={cardList}
          cardsListSetter={setCardList}
        />
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
  const { cardsListState, cardsListSetter, idx } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div className="task-card">
      <div>
        <div>{idx}</div>
        <input
          className="input"
          onChange={handleTitleInput}
          value={title}
          placeholder={"Title"}
          type="text"
        />
      </div>
      <div>
        <textarea
          className="textarea"
          onChange={handleDescriptionInput}
          value={description}
          placeholder={"Description"}
        />
        <button onClick={() => {}}>Submit</button>
      </div>
    </div>
  );
};
export default App;
