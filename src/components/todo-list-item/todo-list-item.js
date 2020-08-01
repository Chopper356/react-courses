import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {

	state = {
		done: false,
		important: false
	}

	onLabelClick = () => {
		this.setState(state => {
			return { 
				done: !state.done
			}
		});
	}

	onMarkImportant = () => {
		this.setState(state => {
			return { 
				important: !state.important
			}
		});
	}

	render() {
		const { label } = this.props;
		const { done, important } = this.state;

		const style = important ? "tomato" : "black";
		let classNames = style;

		if(done) {
			classNames += " done"
		}

		if(important) {
			classNames += " important"
		}

		return (
			<span> 
				<span className={ classNames } onClick={ this.onLabelClick }>
					{ label } 
				</span>
				<button onClick={ this.props.onDeleted } type="button"><i className="fad fa-trash"></i></button>
				<button onClick={ this.onMarkImportant } type="button"><i className="fad fa-exclamation"></i></button>
			</span>
		);
	}
}
export default TodoListItem;