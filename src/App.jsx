import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
console.log(contacts);

class App extends Component {
  constructor() {
    super();
    this.contactArray = [...contacts];

    this.state = {
      fivecontacts: this.contactArray.splice(0, 5),
    };
  }

  addRandomContact = () => {
    let randomContact = this.contactArray.splice(
      Math.round(Math.random() * this.contactArray.length),
      1
    );

    this.setState({
      fivecontacts: this.state.fivecontacts.concat(randomContact),
    });
  };

  sortName = () => {
    this.setState({
      fivecontacts: this.state.fivecontacts.sort(function (a, b) {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      }),
    });
  };

  sortPopularity = () => {
    this.setState({
      fivecontacts: this.state.fivecontacts.sort(function (a, b) {
        if (a.popularity < b.popularity) return 1;
        else if (a.popularity > b.popularity) return -1;
        else return 0;
      }),
    });
  };

  delete = (index) => {
    console.log(index);
    let removeArray = [...this.state.fivecontacts];
    let remove = removeArray.splice(index, 1);

    console.log(this.contactArray);
    this.setState({
      fivecontacts: removeArray,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={this.addRandomContact}>Add Random Contact</button>

        <button onClick={this.sortName}>Sort by name</button>

        <button onClick={this.sortPopularity}>Sort by popularity</button>

        <div className="tableposition">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <p>Picture</p>
                </th>
                <th>
                  <p>Name</p>
                </th>
                <th>
                  <p>Popularity</p>
                </th>
                <th>
                  <p>Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.fivecontacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <th>
                      <img src={contact.pictureUrl} alt="photography" />
                    </th>
                    <th>
                      <p>{contact.name}</p>
                    </th>
                    <th>
                      <p>{contact.popularity.toFixed(2)}</p>
                    </th>
                    <th>
                      <button onClick={() => this.delete(index)}>
                        {' '}
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
