import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";
import Button from "./Person/Button";
import MyTable from "./Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "ashish", age: 25, height: 6 },
        { id: 2, name: "Prince", age: 24, height: 5.8 },
        { id: 3, name: "shivam", age: 20, height: 5.7 },
      ],
    };
  }

  tableHeaderData = () => {
    let headerArray = Object.keys(this.state.persons[0]);
    let headerData = headerArray.map((hValue, index) => {
      return <th key={index}>{hValue.toUpperCase()}</th>;
    });

    return headerData;
  };

  tableData = () => {
    let dataElement = this.state.persons.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.height}</td>
        </tr>
      );
    });

    return dataElement;
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Table</h1>

        <MyTable getHeader={this.tableHeaderData} getData={this.tableData} />
      </div>
    );
  }
}

export default App;
