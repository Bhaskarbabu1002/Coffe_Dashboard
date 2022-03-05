
import "./App.css";
import {Switch,Route } from "react-router-dom";
import Table from "./components/CoffeeTable/Table";
import Header from "./components/Header";
import PreHeader from "./components/PreHeader";
import PostHeader from "./components/PostHeader";
import CoffeeTable from "./components/CoffeeTable/Table";
function App() {

  return (
    <div className="App">
     <div className="header">
       <div className="fixed-top main_menu">
       <PreHeader />
        <Header />
       </div>
      </div>
    <Switch>
          <Route exact path="/">
            <CoffeeTable/>
            </Route> 
            {/* <Route exact path="/coffequotes">
            <CoffeQuotes/>
            </Route> 
            <Route exact path="/coffenewsfeeds">
            <CoffeNewsFeeds/>
            </Route> 
            <Route exact path="/globalrawcoffeeprices">
            <GlobalRawCoffeePrices/>
            </Route> 
            <Route exact path="/globaldifferentials">
            <GlobalDifferentials/>
            </Route>  */}
      </Switch>
    </div>
  );
}

export default App;
