const TextareaAndButton = ({ labelName, to, textareaId, buttonText }) => {
	return (
		<div className="flex  justify-between ">
			<label
				htmlFor={to}
				className="text-base cursor-pointer font-lato font-semibold text-gray-600"
			>
				{labelName}
			</label>
			<div className="w-[500px] flex flex-col space-y-8">
				<textarea
					rows={7}
					className="text-base w-full  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
					type="text"
					id={textareaId}
				/>
				<button
					className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded w-[100px]"
					type="button"
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default TextareaAndButton;
