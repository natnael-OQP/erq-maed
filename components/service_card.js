import Image from "next/image";

const Service_Card = ({title='course for common',image,description}) => {
    return (
		<div className="fy w-[280px] cursor-pointer transition ease-linear transform hover:-translate-y-2 duration-300  mt-20 h-96 bg-white rounded-2xl items-center px-6 py-3">
            <h3>{title}</h3>
            <div className="w-full relative flex-grow">
                <Image src={image} layout="fill" objectFit="contain" alt={title}   />
            </div>
            <p className="text-gray-900 text-center text-sm font-semibold font-lato">{description}</p>
        </div>
	);
}

export default Service_Card
