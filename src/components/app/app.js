import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import AddItem from "../add-item";
import "./app.css"

class App extends React.Component {

	state = {
		todoData: [
			this.createTodoItem("Drink Coffee"),
			this.createTodoItem("Play games"),
			this.createTodoItem("Check telegram")
		],
		query: "",
		filterStatus: ""
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

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: Math.random() * 1000
		}
	}

	addItem = (el) => {

		if (el.length === 0) {
			return false;
		}

		const newItem = {
			label: el,
			important: false,
			done: false,
			id: Math.random() * 1000
		}

		this.setState(({ todoData }) => {
			todoData.push(newItem)

			return {
				todoData: [...todoData]
			}
		});

	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]}

		arr[idx] = newItem;

		return arr
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return { 
				todoData: [...this.toggleProperty(todoData, id, "done")]
			}
		});
	}

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return { 
				todoData: [...this.toggleProperty(todoData, id, "important")]
			}
		});
	}

	onSearch = (query) => {
		this.setState({ query });
	}

	filterStatus(items, filter) {
		switch(filter) {
			case "all": 
				return items;
			case "active":
				return items.filter((item) => !item.done);
			case "done":
				return items.filter((item) => item.done);
			default: 
				return items;
		}
	}

	onStatusChange = (filterStatus) => {
		this.setState({ filterStatus });
	}

	render() {
		
		const doneCount = this.state.todoData.filter((el) => el.done).length;
		const todoCount = this.state.todoData.length - doneCount
		const searchFilter = this.state.todoData.filter((item) => {

			if (this.state.query.length === 0) {
				return this.state.todoData;
			}

			const regExp = new RegExp(this.state.query, "gi");

			return item.label.search(regExp) >= 0;
		});

		const itemsFilter = this.filterStatus(searchFilter, this.state.filterStatus);

		return (
			<div className="app">
				<AppHeader todo={ todoCount } done={ doneCount } />
				<div className="search-panel">
					<SearchPanel onSearch={ this.onSearch } />
					<ItemStatusFilter onStatusChange={ this.onStatusChange } filter={ this.state.filterStatus }/>
				</div>
				<TodoList 
					todos={ itemsFilter } 
					onDeleted={ this.deleteItem } 
					onToggleDone={ this.onToggleDone } 
					onToggleImportant={ this.onToggleImportant }
				/>

				<AddItem addItem={ this.addItem } />
			</div>
		);
	}
}

export default App;