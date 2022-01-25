import { useEffect, useState } from "react";
import { Use_Fetch } from "../lib/fetcher";
import Blog from "./blog";
import Spinner from "./spinner";

const Blog_container = ({ radioCard }) => {
	const [counter, setCounter] = useState(2);
	// api
	const { data, isLoading, isError } = Use_Fetch(
		"/api/blog"
	);
    if (isLoading) {
        return (
			<>
				<Spinner />
				<Spinner />
				<Spinner />
			</>
		);
    }
    const handelClick = () => {
        setCounter(counter+9);
    };
	return (
		<div className="w-[90vw] lg:w-[90%]  xl:w-[65%] mx-auto  h-full py-7  overflow-x-hidden fy">
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
				{data?.length > 0
                    ? data.map((item, i) => {
                        if (i <= counter) {
                            return (
								<Blog
									key={item.id}
									id={item.id}
									title={item.title}
									author={item.author}
									body={item.body}
									date={item.date}
								/>
							);
                        }
                    } )
					: null}
			</div>
			<p
				onClick={handelClick}
				className="text-center cursor-pointer text-secondary font-semibold transition duration-200  hover:scale-105 active:scale-95 hover:text-color4 pt-5"
			>
				View More
			</p>
		</div>
	);
};

export default Blog_container;

