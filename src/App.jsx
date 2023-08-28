import { useState } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./components/Button";
import Container from "./components/Container";
import ContentBox from "./components/ContentBox";
import EndScreen from "./components/EndScreen";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import StartScreen from "./components/StartScreen";

const initialState = {
  items: [],
  status: "welcome",
  filter: "all",
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
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ status, items, filter }, dispatch] = useReducer(
    reducer,
    initialState
  );
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

  // Filter items
  const filteredItems = items.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "packed") {
      return item.packed;
    } else if (filter === "unpacked") {
      return !item.packed;
    }
    return false;
  });

  // Show all items
  function handleShowAllItems() {
    dispatch({
      type: "SET_FILTER",
      payload: "all",
    });
  }

  // Show packed items
  function handleShowPackedItems() {
    dispatch({
      type: "SET_FILTER",
      payload: "packed",
    });
  }

  // Show unpacked items
  function handleShowUnPackedItems() {
    dispatch({
      type: "SET_FILTER",
      payload: "unpacked",
    });
  }

  return (
    <Container>
      <Header numOfItems={numOfItems} numOfPackedItems={numOfPackedItems} />
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
              handleShowPackedItems={handleShowPackedItems}
              handleShowUnPackedItems={handleShowUnPackedItems}
              handleShowAllItems={handleShowAllItems}
            />
            <ItemList
              items={items}
              filteredItems={filteredItems}
              hanldeDeleteItem={hanldeDeleteItem}
              handlePackedItems={handlePackedItems}
              numOfItems={numOfItems}
              numOfPackedItems={numOfPackedItems}
            />
          </>
        )}
        {numOfItems > 0 && (
          <Filter
            handleShowPackedItems={handleShowPackedItems}
            handleShowAllItems={handleShowAllItems}
            handleShowUnPackedItems={handleShowUnPackedItems}
            filter={filter}
          />
        )}
        {status === "end" && (
          <EndScreen handlesStartScreen={handlesStartScreen} />
        )}
        {numOfItems > 0 && numOfItems === numOfPackedItems && (
          <Button onClick={handleEndScreen} initialY="20px" animateY="0px">
            Done
          </Button>
        )}
      </ContentBox>
    </Container>
  );
}

export default App;
