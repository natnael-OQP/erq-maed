import Portfolio_card from "../components/portfolioCard";
import { portfolioData } from "../data";
import { useState, useEffect } from "react";
const Portfolio = () => {
	const [all, setAll] = useState(true);
	const [counter, setCounter] = useState(6);
	const [filteredData, setFilteredData] = useState([]);

	const ViewMore = () => {
		setCounter(counter + 3);
	};
	const ViewLess = () => {
		setCounter(6);
	};

	let filterHandler = (str) => {
		setAll(false);
		var filtered = portfolioData;
		var data = filtered.filter((item) => item.category == str);
		setFilteredData(data);
	};
	// console.log(portfolioData);
	return (
		<main className="w-full flex flex-col select-none pb-80">
			<h1 className="text-secondary text-2xl  md:text-3xl font-semibold text-center tracking-wide">
				Portfolio
			</h1>
			<h1 className="text-gray-400 text-xs  md:text-sm font-semibold text-center max-w-sm mx-auto mt-2">
				Supported neglected met she therefore unwilling discovery
				remainder. Way sentiments two indulgence uncommonly own.
			</h1>
			{/* filter button */}

			<div className="max-w-[850px] mx-auto text-gray-50 space-x-2 md:space-x-4  my-6">
				<button
					onClick={() => setAll(true)}
					className="text-xs sm:text-sm md:text-base  font-semibold capitalize hover:text-secondary  transition-transform ease-in-out "
				>
					All Work
				</button>
				<button
					onClick={() => filterHandler("radio program")}
					className="text-xs sm:text-sm md:text-base  font-semibold capitalize hover:text-secondary  transition-transform ease-in-out "
				>
					Radio Prog
				</button>
				<button
					onClick={() => filterHandler("ngo")}
					className="text-xs sm:text-sm md:text-base  font-semibold capitalize hover:text-secondary  transition-transform ease-in-out "
				>
					Ngo
				</button>
				<button
					onClick={() => filterHandler("health")}
					className="text-xs sm:text-sm md:text-base  font-semibold capitalize hover:text-secondary  transition-transform ease-in-out "
				>
					health
				</button>
				<button
					onClick={() => filterHandler("social media")}
					className="text-xs sm:text-sm md:text-base  font-semibold capitalize hover:text-secondary  transition-transform ease-in-out "
				>
					social media
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2  max-w-[850px] mx-auto    relative overflow-x-hidden">
				{all
					? portfolioData.map((item, i) => {
							if (i < counter) {
								return (
									<Portfolio_card
										key={item.image + i}
										image={item.image}
										category={item.category}
										title={item.title}
									/>
								);
							}
					  })
					: filteredData.map((item, i) => {
							if (i < counter) {
								return (
									<Portfolio_card
										key={item.image + i}
										image={item.image}
										category={item.category}
										title={item.title}
									/>
								);
							}
					  })}
			</div>
			{counter >= portfolioData.length ? (
				<button
					onClick={ViewLess}
					className="text-sm font-semibold text-white bg-secondary  py-2 rounded-lg shadow-sm duration-100 transition-transform ease-in-out  shadow-sky-700 hover:scale-105 active:scale-95 w-[105px] flex justify-center mx-auto mt-10"
				>
					View Less
				</button>
			) : (
				<button
					onClick={ViewMore}
					className="text-sm font-semibold text-white bg-secondary  py-2 rounded-lg shadow-sm duration-100 transition-transform ease-in-out  shadow-sky-700 hover:scale-105 active:scale-95 w-[105px] flex justify-center mx-auto mt-10"
				>
					View More
				</button>
			)}
		</main>
	);
};

export default Portfolio;
