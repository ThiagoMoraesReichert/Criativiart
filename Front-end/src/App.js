import GlobalStyled from "./GlobalStyled";
import Profile from "./Page/Profile/profile";
import Rotas from "./Rotes/Rotas"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <GlobalStyled/>
    
    {/* <BrowserRouter> */}
      <Rotas/>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
