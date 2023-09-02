import './App.css'
import { Link } from 'react-router-dom'

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='profile'>Profile</Link>
					</li>
				</ul>
			</nav>
			<h1>Home</h1>
		</>
	)
}

export default App
