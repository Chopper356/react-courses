import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
	return (
		<ul>
			<li><TodoListItem label="Text1" important/></li>
			<li><TodoListItem label="Text2" /></li>
			<li><TodoListItem label="Text3" /></li>
		</ul>
	);
}

export default TodoList;