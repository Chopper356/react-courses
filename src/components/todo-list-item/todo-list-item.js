import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {

	render() {

		const style = this.props.important ? "tomato" : "black";
		let classNames = style;

		if(this.props.done) {
			classNames += " done"
		}

		if(this.props.important) {
			classNames += " important"
		}

		return (
			<span> 
				<span className={ classNames } onClick={ this.props.onToggleDone }>
					{ this.props.label } 
				</span>
				<button onClick={ this.props.onDeleted } type="button"><i className="fad fa-trash"></i></button>
				<button onClick={ this.props.onToggleImportant } type="button"><i className="fad fa-exclamation"></i></button>
			</span>
		);
	}
}
export default TodoListItem;