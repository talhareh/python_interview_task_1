import logo from './logo.svg';
import './App.css';
import React from “react”;
import { BrowserRouter as Router, Route, Switch } from “react-router-dom”;
import Navbar from “./components/Navbar”;
import ImageList from “./components/ImageList”;
import ImageUpload from “./components/ImageUpload”;

function App() {
  return (
	<Router>
    		<div className="App">
			<Navbar />
			<Switch>
				<Route path=”/” exact component={ImageList} />
				<Route path=”/upload” component={ImageUpload} />
			</switch>
		</div>
	</Router>
	);
}

Export default App;

