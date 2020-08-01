import React from "react";
import "./app-header.css";

const AppHeader = ({ todo, done }) => {
	return (
		<div className="header">
			<h1 className="title">Todo List</h1>
			<p>{todo} more to do, {done} done</p>
		</div>
	);
};

export default AppHeader;
