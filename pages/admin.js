import React, { useState } from "react";
import Head from "next/head";
import HeroSection from "../components/admin/heroSection";
import WhyChooseUsSection from "../components/admin/whyChooseUsSection";
import AboutUsBrandInfo from "../components/admin/aboutUsBrandInfo";
import Blog from "../components/admin/bloge";
import Event from "../components/admin/Event";
import Projects from "../components/admin/Projects";
import Service from "../components/admin/Service";
import SocialMedia from "../components/admin/SocialMedia";

const Admin = () => {
	return (
		<div className="flex w-full min-h-screen mx-auto text-gray-700 bg-gray-100 xl:px-10 gap-x-10">
			<Head>
				<title>erqMaed CMS Panel</title>
			</Head>
			{/* Sidebar */}
			<div className="sticky left-0 top-[15%] flex-[15%] h-[200px] shrink-0 ">
				<ul className="flex flex-col justify-center w-full h-full mx-auto gap-y-2">
					<li className="text-base font-semibold text-gray-600 cursor-pointer font-lato">
						HomePage
					</li>
					<li className="text-base font-semibold text-gray-600 cursor-pointer font-lato">
						AboutUs
					</li>
					<li className="text-base font-semibold text-gray-600 cursor-pointer font-lato">
						Services
					</li>
					<li className="text-base font-semibold text-gray-600 cursor-pointer font-lato">
						Projects
					</li>
				</ul>
			</div>
			{/* content */}
			<div className="flex-[85%] mt-5 flex flex-col ">
				<h1 className="text-3xl font-semibold font-lato">CMS Editor</h1>
				<hr className="my-12" />
				{/* section container */}
				<div className="flex flex-col p-5 bg-white rounded-md shadow-md pb-96 gap-y-2">
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
					{/* Project */}
					<Projects/>
					{/* Service */}
					<Service/>
					{/* SocialMedia */}
					<SocialMedia/>
				</div>
			</div>
		</div>
	);
};

export default Admin;
