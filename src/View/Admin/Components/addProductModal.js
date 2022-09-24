import React, { useState } from 'react';
import './addProductModal.css';
import { createPortal } from 'react-dom';
import TextInput from '../../Components/textInput';
import TextArea from '../../Components/textArea';
import FileInput from '../../Components/fileInput';

export default function AddProductModal() {
	const [image, setImage] = useState();

	return createPortal(
		<div className="add-product-modal">
			<form>
				<TextInput
					name="productName"
					label="Nazwa Produktu"
					formName="addProduct"
					className="flex-column product-name-input"
				/>
				<TextArea
					name="productDescription"
					label="Opis Produktu"
					formName="addProduct"
					className="flex-column product-desc-input"
				/>
				<FileInput
					name="productImage"
					label="Zdjęcie Produktu"
					formName="addProduct"
					setValue={setImage}
					className="flex-column product-img-input"
				/>
				<button
					className="admin-button1"
					onClick={e => {
						e.preventDefault();
						console.log(image);
					}}
				>
					submit
				</button>
			</form>
		</div>,
		document.getElementById('admin-add-product')
	);
}
