import React from "react";

class ItemStatusFilter extends React.Component {

	buttonsList = [
		{name: "all", label: "All"},
		{name: "active", label: "Active"},
		{name: "done", label: "Done"}
	]

	render() {
		
		const Buttons = () => this.buttonsList.map((item) => {
			const isActive = this.props.filter == item.name;
			const btnActive = isActive ? "btnActive" : "btn"
			return (
				<button onClick={ () => this.props.onStatusChange(item.name) } className={`btn ${ btnActive }`} key={ item.name }>{ item.label }</button>
			)
		});

		return (
			<span>
				<Buttons />
			</span>
		);
	}
}

export default ItemStatusFilter