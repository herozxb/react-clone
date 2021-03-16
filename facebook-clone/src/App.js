import Reactfrom from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
	return (
	<div className="app">
		<Header />
		<div className="app__page">
			<Sidebar />
			<Feed />
		</div>
	</div>
	);
}

export default App;
