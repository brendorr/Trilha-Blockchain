import React, { Component } from "react";
import ItemManager from "./contracts/ItemManager.json";
import Item from "./contracts/Item.json";
import getWeb3 from "./getWeb3";
import "./styles.css";

class App extends Component {
  state = { cost: 0, itemName: "exampleItem1", loaded: false };

  componentDidMount = async () => {
    try {
      this.web3 = await getWeb3();
      this.accounts = await this.web3.eth.getAccounts();
      const networkId = await this.web3.eth.net.getId();

      this.itemManager = new this.web3.eth.Contract(
        ItemManager.abi,
        ItemManager.networks[networkId] && ItemManager.networks[networkId].address
      );
      this.item = new this.web3.eth.Contract(
        Item.abi,
        Item.networks[networkId] && Item.networks[networkId].address
      );
      this.listenToPaymentEvent();
      this.setState({ loaded: true });
    } catch (error) {
      alert("Failed to load web3, accounts, or contract. Check console for details.");
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    const { cost, itemName } = this.state;
    try {
      let result = await this.itemManager.methods.createItem(itemName, cost).send({ from: this.accounts[0] });
      alert("Send " + cost + " Wei to " + result.events.SupplyChainStep.returnValues._address);
    } catch (error) {
      alert("Transaction failed. Check console for details.");
      console.error(error);
    }
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <h1>Simply Payment/Supply Chain Example!</h1>
        <h2>Items</h2>
        <h2>Add Element</h2>
        Cost: <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
        Item Name: <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSubmit}>Create new Item</button>
      </div>
    );
  }
  listenToPaymentEvent = () => {
    let self = this;
    this.itemManager.events.SupplyChainStep().on("data", async function(evt) {
    if(evt.returnValues._step === 1) {
    let item = await self.itemManager.methods.items(evt.returnValues._itemIndex).call(
   );
    console.log(item);
    alert("Item " + item._identifier + " was paid, deliver it now!");
    };
    console.log(evt);
    });
    }
   
}

export default App;
