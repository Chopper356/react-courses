import React from "react";

class AddItem extends React.Component {

	state = {
		label: ""
	}

	onLabelChange= (event) => {
		this.setState({
			label: event.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.label)
		this.setState({
			label: ""
		});
	}

	render() {
		return (
			<form className="add-item-form" onSubmit={this.onSubmit}>
				<input placeholder="New item" type="text" onChange={ this.onLabelChange } value={ this.state.label }/>
				<button  type="submit">Add</button>
			</form>
		)
	}
}

export default AddItem