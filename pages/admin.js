import React, { useState } from "react";
import Head from "next/head";
import HeroSection from "../components/admin/heroSection";
import WhyChooseUsSection from "../components/admin/whyChooseUsSection";
import AboutUsBrandInfo from "../components/admin/aboutUsBrandInfo";
import Blog from "../components/admin/bloge";
import Event from "../components/admin/Event";

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
					{/* HERO SECTION */}
					<HeroSection />
					{/* WHY Choose Us  */}
					<WhyChooseUsSection />
					{/* About Us - Brand Information */}
					<AboutUsBrandInfo />
					{/* Blog */}
					<Blog />
					{/* Event */}
					<Event />
				</div>
			</div>
		</div>
	);
};

export default Admin;
