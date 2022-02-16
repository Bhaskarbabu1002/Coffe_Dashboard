import { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';

import Header from "./components/Header";
import './App.css';
import Data from "./data.json";
import PreHeader from "./components/PreHeader";
const dateformat = (arg) =>{
  let date = new Date(arg)
  return date.toLocaleDateString()
  }
function App() {
  const [tableData, settableData] = useState(Data)
  const [keys, setkeys] = useState([])
  useEffect(() => {
    // console.log("data", Object.keys(tableData));
    settableData(Data)
    setkeys(Object.keys(tableData[0]))
  }, []) 
  return (
    <div className="App">
      <div className="header">
      <PreHeader/>
      <Header/>
      </div>
            <div className="">
            <div className="table-card " >
              <div className="d-flex ">
                <div className="d-flex ml-5">
                  <div>  <p className="mb-0 bg-light px-2 font-weight-bold">Time : 02:43</p></div>
              <div>  <p className="mb-0 bg-light ml-3 px-2 font-weight-bold">Date : 15/02/2022</p></div>         
                </div>
              </div>
              <div className="heading text-center">
                  <p className="font-weight-bold pl-5 mb-0">ROBUSTA MARKET</p>
                </div>
      <div className="mb-5">   
      <Table className="table table-striped align-items-center table-flush" responsive>
      <thead className=" font-weight-bold">
    <tr className="text-white">
       <th scope="col">Contract</th>
      <th scope="col">Last</th>
      <th scope="col">Chg</th>
      <th scope="col">%</th>
      <th scope="col">Vol</th>
      <th scope="col">High</th>
      {/* <th scope="col">$-High</th> */}
      <th scope="col">Low</th>
      {/* <th scope="col">$-Low</th> */}
      <th scope="col">Open</th>
      <th scope="col">Prev</th>
      <th scope="col">OPen Int</th>
      <th scope="col">Bid</th>
      <th scope="col">BSize</th>
      <th scope="col">Ask</th>
      <th scope="col">ASize</th>
      <th scope="col">Option Exp</th>
      <th scope="col">First Notice</th>
      {/* {keys.map((item)=>{
        console.log("map",item);
        return(
          <th scope="col">{item}</th>
        )
      })} */}
      
      {/* [
    "id",
    "symbol",
    "marketId",
    "serviceType",
    "status",
    "symbolExpiration",
    "priceFormatDenominator",
    "priceDenominator",
    "quantityDenominator",
    "transactionTime",
    "tradeDate",
    "tradingStatus",
    "bidPrice",
    "bidQuantity",
    "offerPrice",
    "offerQuantity",
    "openPrice",
    "high",
    "low",
    "last",
    "volume",
    "openInterest",
    "symbolStart",
    "symbolEnd",
    "isActive",
    "symbolType",
    "displayOrder",
    "apiKeyId",
    "lastUpdatedDate",
    "displayName",
    "previous",
    "channelId",
    "change",
    "percentage",
    "firstNotice"
] */}
      
    </tr>
  </thead>
  <tbody>
  {Data.map((item) => {
    // console.log("mP",item);
      return ( 
        <tr>
        <td>{item.displayName}</td> 
        <td>{item.last}</td> 
        <td>{item.change}</td> 
        <td>{item.percentage}</td>
        <td>{item.volume}</td> 
        <td>{item.high}</td>
        <td>{item.low}</td> 
        <td>{item.openPrice}</td>
        <td>{item.previous}</td>
        <td>{item.openInterest}</td>
        <td>{item.bidPrice}</td>
        <td>{item.bidQuantity}</td>
        <td>{item.offerPrice}</td>
        <td>{item.offerQuantity}</td>
        <td>{dateformat(item.symbolExpiration)}</td>
        <td>{item.firstNotice===null&&"null"}</td>
        </tr>          
      )})}                                                              
  </tbody>
</Table></div>

            </div>
          </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
