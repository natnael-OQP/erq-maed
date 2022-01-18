import Blog from "./blog";

const Blog_container = () => {
    return (
		<div className="w-[90vw] lg:w-[90%]  xl:w-[65%] mx-auto  h-full py-7  overflow-x-hidden fy">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
                <Blog/>
                <Blog/>
                <Blog/>
            </div>
			<p className="text-center cursor-pointer text-secondary font-semibold transition duration-200  hover:scale-105 active:scale-95 hover:text-color4 pt-5">View More</p>
		</div>
	);
}

export default Blog_container
