import Portfolio_card from "../components/portfolio_card";
import { portfolioData } from "../data";

const Portfolio = () => {
	return (
		<main className="w-full flex flex-col select-none">
			<h1 className="text-secondary text-2xl  md:text-3xl font-semibold text-center tracking-wide">
				Portfolio
			</h1>
			<h1 className="text-gray-400 text-xs  md:text-sm font-semibold text-center max-w-sm mx-auto mt-2">
				Supported neglected met she therefore unwilling discovery
				remainder. Way sentiments two indulgence uncommonly own.
			</h1>
			{/* filter button */}

			<div className="max-w-[850px] mx-auto text-gray-50 space-x-4 my-6">
				<button className="text-base font-semibold capitalize hover:text-secondary  transition-transform ease-in-out ">All Work</button>
				<button className="text-base font-semibold capitalize hover:text-secondary  transition-transform ease-in-out ">Ngo</button>
				<button className="text-base font-semibold capitalize hover:text-secondary  transition-transform ease-in-out ">health</button>
				<button className="text-base font-semibold capitalize hover:text-secondary  transition-transform ease-in-out ">social media</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8  max-w-[850px] mx-auto pb-96   relative overflow-x-hidden">
				{portfolioData.map((item, i) => {
					if (i < 8) {
						return (
							<Portfolio_card
								key={item.image}
								image={item.image}
								category={item.category}
								title={item.title}
							/>
						);
					}
				})}
			</div>
		</main>
	);
};

export default Portfolio;
