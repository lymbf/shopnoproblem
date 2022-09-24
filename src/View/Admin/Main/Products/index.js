import React, { useEffect, useState } from 'react';
import './index.css';
import { useQuery, gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../../Application/Redux/Reducers/products';
import { Link } from 'react-router-dom';
import BaseModal from '../../Components/baseModal';
import AddProductModal from '../../Components/addProductModal';
import Shadow from '../../Components/shadow';

const PRODUCTS = gql`
	query GetProductsByState($type: [String]) {
		products(filters: { state: { in: $type } }) {
			data {
				id
				attributes {
					name
					state
					createdAt
					image {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export default function Products() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const [showAddProduct, setShowAddProduct] = useState(false);
	const { loading, error, data } = useQuery(PRODUCTS, {
		variables: { type: 'new' }
	});

	useEffect(
		() => {
			if (data) {
				dispatch(setProducts(data.products.data));
			}
			return () => {
				dispatch(setProducts([]));
			};
		},
		[data]
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div className="admin-products">
			<BaseModal class={'max-width-200 flex-center h1-modal'}>
				<h1>Produkty</h1>
			</BaseModal>
			<BaseModal class={`admin-products-modal`}>
				<div className="products-field-names">
					<div className="flex-1">ID</div>
					<div className="flex-2">nazwa</div>
					<div className="flex-1">img</div>
					<div className="flex-4">
						{' '}data dodania
					</div>
					<div className="flex-2">
						<span>Icon</span>
					</div>
				</div>
				{products.length &&
					products.map(product => {
						return (
							<div
								key={product.id}
								className="admin-product-element"
							>
								<div className="flex-1">
									{
										product.id
									}
								</div>
								<div className="flex-2">
									{
										product
											.attributes
											.name
									}
								</div>
								<div className="flex-1 admin-product-img">
									<img
										src={`http://localhost:1337${product
											.attributes
											.image
											.data[0]
											.attributes
											.url}`}
									/>
								</div>
								<div className="flex-4">
									{
										product
											.attributes
											.createdAt
									}
								</div>
								<div className="flex-2 product-action-icons">
									<Link
										to={`../product/${product.id}`}
									>
										<span class="material-symbols-outlined">
											edit
										</span>
									</Link>
									<span class="material-symbols-outlined">
										delete
									</span>
								</div>
							</div>
						);
					})}
			</BaseModal>
			<div className="admin-products-bottom-icons">
				<BaseModal class="admin-products-icon">
					<span
						class="material-symbols-outlined"
						onClick={() => {
							setShowAddProduct(true);
						}}
					>
						add
					</span>
				</BaseModal>
				{/* <BaseModal class="admin-products-icon">
					<span class="material-symbols-outlined">
						delete
					</span>
				</BaseModal> */}
			</div>
			{showAddProduct && <AddProductModal />}
			{showAddProduct &&
				<Shadow
					onClick={() => {
						setShowAddProduct(false);
					}}
				/>}
		</div>
	);
}
