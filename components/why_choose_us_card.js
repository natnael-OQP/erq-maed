import Image from "next/image";

const Why_choose_us_card = ({
	title = "course for common",
	image,
	description,
}) => {
    return (
		<div className="h-[250px] mx-auto min-w-[200px]  px-2">
			<div className="fy  select-none   cursor-pointer bg-[#10121F]    w-full h-full  items-center px-3 py-3 rounded-md">
				<h3>{title}</h3>
				<div className="w-full relative flex-grow my-3">
					<Image
						src={image}
						layout="fill"
						objectFit="contain"
						alt={title}
					/>
				</div>
				<p className="text-color3 text-center text-sm font-semibold font-lato">
					{description}
				</p>
			</div>
		</div>
	);
};

export default Why_choose_us_card;
