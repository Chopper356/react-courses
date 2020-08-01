import React from "react";

class ItemStatusFilter extends React.Component {
	render() {
		return (
			<span>
				<button>All</button>
				<button>Active</button>
				<button>Done</button>
			</span>
		);
	}
}

export default ItemStatusFilter