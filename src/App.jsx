import './App.css'
import { Link } from 'react-router-dom'

function App() {
	return (
		<>
			<h1>Home</h1>
			<nav>
				<ul>
					<li>
						<Link to='profile'>Profile</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default App
