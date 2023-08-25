import Container from "./components/Container";
import ContentBox from "./components/ContentBox";
import Form from "./components/Form";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <Container>
      <Header />
      <ContentBox>
        <Form />
        {/* <StartScreen /> */}
        <ItemList />
      </ContentBox>
    </Container>
  );
}

export default App;
