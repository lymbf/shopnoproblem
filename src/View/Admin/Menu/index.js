import React from 'react';
import './index.css';
import User from '../User';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<div className="admin-menu">
			<User />
			<div className="admin-menu-element">
				<Link to="orders">
					<h5 className="h-hover">Zamowienia</h5>
				</Link>

				<div>
					<span class="material-symbols-outlined">
						new_releases
					</span>
					<Link to="orders/new">
						<p>nowe</p>
					</Link>
				</div>

				<div>
					<span class="material-symbols-outlined">
						gpp_maybe
					</span>
					<Link to="orders/notstarted">
						<p>do realizacji</p>
					</Link>
				</div>
				<div>
					<span class="material-symbols-outlined">
						swap_horizontal_circle
					</span>
					<Link to="orders/shipped">
						<p>w trakcie wysyłki</p>
					</Link>
				</div>
				<div>
					<span class="material-symbols-outlined">
						check_small
					</span>
					<Link to="orders/completed">
						<p>zrealizowane</p>
					</Link>
				</div>
			</div>
			<div className="admin-menu-element">
				<h5>Statystyki</h5>

				<div>
					<span class="material-symbols-outlined">
						monitoring
					</span>
					<Link to="stats/sales">
						<p>sprzedaż</p>
					</Link>
				</div>
				<div>
					<span class="material-symbols-outlined">
						speed
					</span>
					<Link to="stats/production">
						<p>realizacja zamowień</p>
					</Link>
				</div>
			</div>
			<div className="admin-menu-element">
				<h5>administracja</h5>
				<div>
					<span class="material-symbols-outlined">
						store
					</span>
					<Link to="products">
						<p>produkty</p>
					</Link>
				</div>
				<div>
					<span class="material-symbols-outlined">
						group
					</span>
					<Link to="users">
						<p>użytkownicy</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
