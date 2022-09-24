import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInput } from '../../Application/Redux/Reducers/forms';

export default function TextArea({
	name,
	validators,
	className,
	formName,
	label
}) {
	const [value, setValue] = useState();
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(
				setInput({
					formName: formName,
					inputName: name,
					value: value
				})
			);
		},
		[value]
	);
	return (
		<div className={className}>
			<label>
				{label}
			</label>
			<textArea
				type="text"
				value={value}
				onChange={e => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}
