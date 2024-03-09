import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductList from './pages/ProductList';

function App() {
	return (
		<div className="App">
			<Navbar />
			<ProductList />
		</div>
	);
}

export default App;
