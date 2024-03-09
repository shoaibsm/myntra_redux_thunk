import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductList from './pages/ProductList';
import Home from './pages/home/Home';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
