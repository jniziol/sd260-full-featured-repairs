import React from "react";

class RepairForm extends React.Component {
  state = {
    repairInput: "",
  };

  updateRepairField = e => {
    this.setState({ repairInput: e.target.value });
  };

  createNewRepair = e => {
    if (this.state.repairInput.length > 0) {
      this.props.createNewRepair(this.state.repairInput);
    }

    this.setState({ repairInput: "" });
    e.preventDefault();
  };

  render = () => {
    return (
      <form onSubmit={this.createNewRepair}>
        <input name="repairInput" className="new-repair" placeholder="What needs to be repaired?" autoFocus="" value={this.state.repairInput} onChange={this.updateRepairField} />
      </form>
    );
  };
}

export default RepairForm;
