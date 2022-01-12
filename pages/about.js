import Image from "next/image";
import Service_Card from "../components/service_card";
import paragraph from "../models/paragraph";
import Contact_Us from "../components/contact_us";

const About = () => {
	const { paragraph: paragraph1 } =
		new paragraph(`Oh to talking improve produce in limited offices fifteen
                an. Wicket branch to answer do we. Place are decay men
                hours tiled. If or of ye throwing friendly required.
                Marianne interest in exertion as. Offering my branched
                confined oh dashwood.`);
	const { paragraph: paragraph2 } =
		new paragraph(`Supported neglected met she therefore unwilling
                discovery remainder. Way sentiments two indulgence
                uncommonly own.`);
	const { paragraph:paragraph3 } =
		new paragraph(`Village did removed enjoyed explain nor ham saw
                calling talking. Securing as informed declared or
                margaret. Joy horrible moreover man feelings own
                shy. Request norland neither mistake for yet.
                Between the for morning assured country believe. On
                even feet time have an no at. Relation so in
                confined smallest children unpacked delicate. Why
                sir end believe uncivil respect. Always get adieus
                nature day course for common. My little garret
                repair to desire he esteem.Sister depend change off
                piqued one. Contented continued any happiness
                instantly objection yet her allowance. Use correct
                day new brought tedious. By come this been in. Kept
                easy or sons my it done.`);

	return (
		<div className="gap-y-20 fy mt-10 font-lato">
			{/* landing section*/}
			<div className="flex-col md:flex-row jb px-3 md:px-20  ">
				<div className="fy w-full  md:max-w-[460px]">
					<h1 className="text-white font-normal font-lato text-3xl md:text-4xl lg:text-5xl  lg:leading-[3.6rem]">
						{"Let's"}{" "}
						<span className="text-secondary font-semibold">
							{" "}
							Build{" "}
						</span>{" "}
						Great <br /> Experiences Together
					</h1>
					<p className=" text-base md:text-sm  font-normal pt-6 pt-10 text-color3">
						{paragraph1}
					</p>
					<button className="hover:shadow-sm hover: an hover:scale-105 active:scale-95  mt-6 w-36 px-4 h-12 text-lg rounded-3xl bg-[#46AACC] text-white font-semibold">
						Explore
					</button>
				</div>
				<div className="relative shrink-0 w-full h-[500px]   md:w-[550px] md:h-[600px]">
					<Image
						layout="fill"
						objectFit="contain"
						src="/svg0.svg"
						alt="baned"
					/>
				</div>
			</div>
			{/* about us section */}
			<div className="fy mt-1 md:mt-4 px-2">
				<h1 className="text-center font-bold text-4xl  md:text-[40px] tracking-wide  text-secondary font-lato">
					About Us
				</h1>
				<p className="text-center mt-4 font-normal text-sm md:text-base w-[70%] sm:w-[30%] mx-auto font-sans text-color3">
					Request norland neither mistake for yet. Between the for
					morning assured country believe.
				</p>
				{/* info */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-2 mt-8 items-center">
					{/* Image */}
					<div className="relative w-full h-[400px] md:max-w-[550px] md:h-[550px] mx-auto">
						<Image
							layout="fill"
							objectFit="contain"
							src="/svg1.svg"
							alt="about us"
						/>
					</div>
					{/* text */}
					<div className="fy max-w-[540px] mx-auto">
						{/* text-1 */}
						<h1 className="text-white font-normal font-lato text-xl md:text-2xl">
							Reasons for choosing us
						</h1>
						{/* paragraph-2 */}
						<p className="text-sm md:text-base  font-semibold mt-2 md:mt-5 text-color3">
							{paragraph2}
						</p>
						{/* paragraph-3 */}
						<p className="text-sm md:text-base  font-normal mt-4 text-color3">
							{paragraph3}
						</p>
						<h3 className="cursor-pointer mt-3  h-12 text-lg rounded-3xl text-[#46AACC]  font-semibold">
							Read More
						</h3>
					</div>
				</div>
			</div>

			{/* Our Service */}
			<div className="fy md:mt-14">
				<h1 className="text-center font-bold  text-[40px] tracking-wide  text-secondary font-lato">
					Our Service
				</h1>
				<p className="text-center mt-4 font-normal text-base w-[70%] sm:w-[50%] md:w-[36%] mx-auto font-sans text-color3">
					Between the for morning assured country believe.norland
					neither mistake for yet. for morning assured country
				</p>
				{/* service cards */}
				<div className="grid gap-y-4 md:gap-x-3 lg:grid-cols-4 px-6 md:px-16 py-10 ">
					{Array(4).fill(
						<Service_Card
							image="/svg2.svg"
							title="assured country"
							description="Between the for morning assured country believe.norland
										neither mistake for yet. for morning assured country"
						/>
					)}
				</div>
			</div>
			{/* Contact us section*/}
			<Contact_Us />
		</div>
	);
};

export default About;
