import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {

	onSearchChange = (e) => {
		const label = e.target.value;

		this.props.onSearch(label);
	}

	render() {
		return ( 
			<input className="search" placeholder="Search" onChange={ this.onSearchChange }/>
		);
	}
};

export default SearchPanel;