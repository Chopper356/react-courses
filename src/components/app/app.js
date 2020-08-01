import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./app.css"

class App extends React.Component {

	state = {
		todoData: [
			{ label: "Drink Coffe", important: false, id: 1 },	
			{ label: "Play games", important: true, id: 2 },
			{ label: "Check telegram", important: false, id: 3 }
		]
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			todoData.splice(idx, 1);

			return {
				todoData: [...todoData]
			}
		});
	}

	render() {
		return (
			<div className="app">
				<AppHeader todo="1" done="3"/>
				<div className="search-panel">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={ this.state.todoData } onDeleted={ this.deleteItem } />
			</div>
		);
	}
}

export default App;