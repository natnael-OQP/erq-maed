const AboutUsBrandInfo = () => {
	return (
		<div className="gap-y-2 flex flex-col">
			<h3 className="text-base text-gray-400 font-lato capitalize font-normal tracking-wider mb-3 mt-14">
				About Us - Brand Information
			</h3>
			<hr />
			<from className="space-y-14 mt-5">
				<div className="flex items-center justify-between ">
					<label
						htmlFor="aboutTitle"
						className="text-base cursor-pointer font-lato font-semibold text-gray-600"
					>
						About Us Title
					</label>
					<input
						className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
						type="text"
						id="aboutTitle"
					/>
				</div>
				<div className="flex items-center justify-between ">
					<label
						htmlFor="aboutUsSubTitle"
						className="text-base cursor-pointer font-lato font-semibold text-gray-600"
					>
						About Us - sub title
					</label>
					<input
						className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
						type="text"
						id="aboutUsSubTitle"
					/>
				</div>
				<div className="flex  justify-between ">
					<label
						htmlFor="aboutDescription"
						className="text-base cursor-pointer font-lato font-semibold text-gray-600"
					>
						About Us Description
					</label>
					<div className="w-[500px] flex flex-col space-y-8">
						<textarea
							rows={7}
							className="text-base w-full  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
							type="text"
							id="aboutDescription"
						/>
						<button
							className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded w-[100px]"
							type="button"
						>
							Save
						</button>
					</div>
				</div>
			</from>
		</div>
	);
};

export default AboutUsBrandInfo;
