import React from "react";

const Label = ({name,to}) => {
	return (
		<label
			htmlFor={to}
			className="text-base cursor-pointer font-lato font-semibold text-gray-600"
		>
			{name}
		</label>
	);
};

export default Label;
