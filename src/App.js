import React, {Component} from 'react';
import Repair from "./Repair";
import RepairForm from "./RepairForm";

class App extends Component {
  repairId = 0;

  state = {
    repairs: [],
  };

  createNewRepair = repairString => {
    this.setState(prevState => {
      return {
        repairs: [...prevState.repairs, { task: repairString, id: this.repairId++, completed: false }],
      };
    });
  };

  removeRepair = repair => {
    this.setState(prevState => ({
      repairs: prevState.repairs.filter(repairElement => repairElement !== repair),
    }));
  };

  completeRepair = repair => {
    this.setState(prevState => {
      return { repairs: prevState.repairs.map(rep => (rep === repair ? { ...repair, completed: true } : rep)) };
    });
  };

  clearCompletedRepairs = () => {
    this.setState(prevState => ({
      repairs: prevState.repairs.filter(repairElement => !repairElement.completed),
    }));
  };

  render() {
    return (
      <section className="fixmeapp">
        <header className="header">
          <h1>rep🔥irs</h1>
          <RepairForm createNewRepair={this.createNewRepair} />
        </header>
        <section className="main">
          <ul className="repair-list">
            {this.state.repairs.map(repair => (
              <Repair repair={repair} key={repair.id} removeRepair={this.removeRepair} completeRepair={this.completeRepair}/>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <button className="clear-completed" onClick={this.clearCompletedRepairs}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;