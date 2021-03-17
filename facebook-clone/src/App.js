import Reactfrom from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './StateProvider'
import './App.css';

function App() {

	const [ { user }, dispatch ] = useStateValue();

	return (
	<div className="app">
		{!user ? (
			<Login />
			):(
		<>
		<Header />
		<div className="app__page">
			<Sidebar />
			<Feed />
		</div>
		</>
		)}
	</div>
	);
}

export default App;
