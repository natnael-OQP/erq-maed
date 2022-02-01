import Image from "next/image";

const Portfolio_card = ({category,title,image}) => {
	return (
		<div className="max-w-[205px] h-[100px] bg-gray-50 relative mx-auto mt-20  ">
			<div className="absolute -top-14 left-0  rounded-3xl w-[195px]  h-[130px]  overflow-hidden">
				<div className="relative w-full h-full overflow-hidden bg-secondary ">
					<Image
						className="opacity-40"
						layout="fill"
						objectFit="cover"
						src={image}
						alt={title}
					/>
					<span className="absolute left-5 bottom-2 text-xs font-bold text-white py-1 bg-primary z-50 px-3 rounded-full ">
						{category}
					</span>
				</div>
			</div>
			<h3 className="w-[90vw] truncate text-sm font-semibold mt-[77px] px-2">
				{title}
			</h3>
		</div>
	);
};

export default Portfolio_card;
