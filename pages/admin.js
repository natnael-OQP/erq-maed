import React from "react";
import Head from "next/head";

const Admin = () => {
	return (
		<div className="bg-gray-100 text-gray-700 w-full xl:px-10 mx-auto min-h-screen flex gap-x-10">
			<Head>
				<title>erqMaed CMS Panel</title>
			</Head>
			{/* Sidebar */}
			<div className="sticky left-0 top-[15%] flex-[15%] h-[200px] shrink-0 ">
				<ul className="w-full h-full flex flex-col  justify-center mx-auto  gap-y-2">
					<li className="text-base font-lato text-gray-600 cursor-pointer font-semibold">
						HomePage
					</li>
					<li className="text-base font-lato text-gray-600 cursor-pointer font-semibold">
						AboutUs
					</li>
					<li className="text-base font-lato text-gray-600 cursor-pointer font-semibold">
						Services
					</li>
					<li className="text-base font-lato text-gray-600 cursor-pointer font-semibold">
						Projects
					</li>
				</ul>
			</div>
			{/* content */}
			<div className="flex-[85%] mt-5 flex flex-col ">
				<h1 className="text-3xl font-semibold font-lato">CMS Editor</h1>
				<hr className="my-12" />
				{/* section container */}
				<div className="bg-white pb-96 flex flex-col gap-y-2 p-5 shadow-md rounded-md">
					<h2 className="text-xl font-semibold font-lato py-6 ">
						Homepage - Brand Information
					</h2>
					{/* HERO SECTION */}
					<h3 className="text-base text-gray-400 font-lato capitalize font-normal tracking-wider">
						HERO SECTION
					</h3>
					<hr />
					<from className="space-y-14 mt-5">
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Title
							</label>
							<input
								className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
								type="text"
								id="heroTitle"
							/>
						</div>
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Hero - Description
							</label>
							<input
								className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
								type="text"
								id="heroTitle"
							/>
						</div>
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Moto
							</label>
							<div className="w-[500px] flex flex-col space-y-8">
								<input
									className="text-base w-full  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
									type="text"
									id="heroTitle"
								/>
								<button
									className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
									type="button"
								>
									Save
								</button>
							</div>
						</div>
					</from>
					{/* HERO SECTION */}
					<h3 className="text-base text-gray-400 font-lato capitalize font-normal tracking-wider">
						WHY SECTION
					</h3>
					<hr />
					<from className="space-y-14 mt-5">
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Title
							</label>
							<input
								className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
								type="text"
								id="heroTitle"
							/>
						</div>
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Hero - Description
							</label>
							<input
								className="text-base w-[500px]  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
								type="text"
								id="heroTitle"
							/>
						</div>
						<div className="flex items-center justify-between ">
							<label
								htmlFor="heroTitle"
								className="text-base cursor-pointer font-lato font-semibold text-gray-600"
							>
								Hero Moto
							</label>
							<div className="w-[500px] flex flex-col space-y-8">
								<input
									className="text-base w-full  px-2 rounded-md shadow-sm  bg-gray-200 text-gray-600 focus:bg-gray-50 outline-none   border-sky-400 focus:border-[2px] py-2 "
									type="text"
									id="heroTitle"
								/>
								<button
									className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
									type="button"
								>
									Save
								</button>
							</div>
						</div>
					</from>
				</div>
			</div>
		</div>
	);
};

export default Admin;
// <main className="bg-gray-100 text-gray-900 tracking-wider leading-normal">
