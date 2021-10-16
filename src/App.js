import "./App.css";

//ROUTE SYSTEM
import { BrowserRouter, Switch, Route } from "react-router-dom";

//COMPONENTS
import Error from "./components/error/Error";
import Home from "./components/views/home/Home";
import ViewCart from "./components/views/ViewCart";
import Content from "./layout/Content";
import NavBar from "./components/navbar/NavBar";

//CONTEXT
import ItemProvider from "./context/ItemContext";

function App() {
  return (
    <ItemProvider>
    <BrowserRouter>
      <NavBar />
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/cart-shop">
            <ViewCart />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Content>
    </BrowserRouter>
    </ItemProvider>
  );
}

export default App;
