import Image from "next/image";

const Service_Card = ({title='course for common',image,description}) => {
    return (
		<div className="fy scroll-ml-6 snap-center md:snap-start select-none snap-always  h-[310px] mx-auto min-w-[280px] md:h-96 cursor-pointer bg-white rounded-xl sm:rounded-2xl items-center px-6 py-3">
			<h3>{title}</h3>
			<div className="w-full relative flex-grow my-3">
				<Image
					src={image}
					layout="fill"
					objectFit="contain"
					alt={title}
				/>
			</div>
			<p className="text-gray-900 text-center text-sm font-semibold font-lato">
				{description}
			</p>
		</div>
	);
}

export default Service_Card
