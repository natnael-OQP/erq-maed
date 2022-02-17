const Textarea = ({ textareaId }) => {
	return (
		<div className="w-[500px] flex flex-col space-y-8">
			<textarea
				rows={7}
				className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
				type="text"
				id={textareaId}
			/>
		</div>
	);
};

export default Textarea;
