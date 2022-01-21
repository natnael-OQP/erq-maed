import {AiOutlineLoading3Quarters} from 'react-icons/ai'
const Spinner = () => {
    return (
		<div className="flex justify-center items-center">
			<div
				className="spinner-border animate-spin inline-block w-12 h-12  "
				role="status"
			>
				<span className="visually-hidden"><AiOutlineLoading3Quarters className="w-full h-full text-primary" /></span>
			</div>
		</div>
	);
};

export default Spinner;
