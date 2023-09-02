import { Link, Outlet } from 'react-router-dom'
function Profile() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='spinach'>Spinach</Link>
					</li>
					<li>
						<Link to='popeye'>Popeye</Link>
					</li>
				</ul>
			</nav>
			<h1>Profile</h1>
			<Outlet />
		</div>
	)
}
export default Profile
