import { useState } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./components/Button";
import Container from "./components/Container";
import ContentBox from "./components/ContentBox";
import EndScreen from "./components/EndScreen";
import Form from "./components/Form";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import StartScreen from "./components/StartScreen";

const initialState = {
  items: [],
  status: "welcome",
};

function reducer(state, action) {
  switch (action.type) {
    case "START_SCREEN":
      return {
        ...state,
        status: "welcome",
      };
    case "SWITCH_SCREEN":
      return {
        ...state,
        status: "planTrip",
      };
    case "ADD_ITEMS":
      return {
        ...state,
        items: [...state.items, action.payload],
        status: "planTrip",
      };
    case "DELETE_ITEMS":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
        status: "planTrip",
      };
    case "IS_PACKED":
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === action.payload
              ? { ...item, packed: !item.packed }
              : item
          ),
        ],
        status: "planTrip",
      };
    case "END_SCREEN":
      return {
        ...state,
        items: [],
        status: "end",
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ status, items }, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(1);

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;

  // Switch screen
  function handleScreen(e) {
    e.preventDefault();
    dispatch({
      type: "SWITCH_SCREEN",
    });
  }

  // Start Screen
  function handlesStartScreen(e) {
    e.preventDefault();
    dispatch({
      type: "START_SCREEN",
    });
  }

  // End Screen
  function handleEndScreen(e) {
    e.preventDefault();
    dispatch({
      type: "END_SCREEN",
    });
  }

  // Add item
  function handleAddItems(e) {
    e.preventDefault();
    if (text === "") return;
    dispatch({
      type: "ADD_ITEMS",
      payload: {
        id: uuidv4(),
        text,
        quantity,
        packed: false,
      },
    });
    setText("");
  }

  // Delete item
  function hanldeDeleteItem(id) {
    dispatch({
      type: "DELETE_ITEMS",
      payload: id,
    });
  }

  // Is packed item
  function handlePackedItems(id) {
    dispatch({
      type: "IS_PACKED",
      payload: id,
    });
  }
  return (
    <Container>
      <Header />
      <ContentBox>
        {status === "welcome" && <StartScreen handleScreen={handleScreen} />}
        {status === "planTrip" && (
          <>
            <Form
              text={text}
              setText={setText}
              handleAddItems={handleAddItems}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <ItemList
              items={items}
              hanldeDeleteItem={hanldeDeleteItem}
              handlePackedItems={handlePackedItems}
              numOfItems={numOfItems}
              numOfPackedItems={numOfPackedItems}
            />
          </>
        )}
        {status === "end" && (
          <EndScreen handlesStartScreen={handlesStartScreen} />
        )}
        {numOfItems > 1 && numOfItems === numOfPackedItems && (
          <Button onClick={handleEndScreen}>Close</Button>
        )}
      </ContentBox>
    </Container>
  );
}

export default App;
