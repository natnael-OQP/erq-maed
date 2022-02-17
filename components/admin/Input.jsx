const Input = ({type,id}) => {
	return (
		<input
			className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
			type={type}
			id={id}
		/>
	);
};

export default Input;
