import styled from "styled-components";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import './components/Third.scss';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;



function App() {

  return (
    <Container>
      <First/>
      <Second/>
      <Third/>
    </Container>
  );
}

export default App;
