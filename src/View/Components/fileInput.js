import React, { useState } from 'react';
import './fileInput.css';

export default function FileInput({
	name,
	validators,
	className,
	formName,
	label,
	setValue
}) {
	const [filePreview, setFilePreview] = useState();
	return (
		<div className={`file-input ${className}`}>
			<label>
				{label}
			</label>
			<input
				type="file"
				onChange={e => {
					setValue(e.target.files[0]);
					console.log(e.target.files[0]);
					setFilePreview(
						URL.createObjectURL(
							e.target.files[0]
						)
					);
					// setFilePreview()
				}}
			/>
			{filePreview &&
				<img
					className="file-preview"
					src={`${filePreview}`}
				/>}
		</div>
	);
}
