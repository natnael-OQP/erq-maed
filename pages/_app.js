import Layout from "../components/layout";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function MyApp({ Component, pageProps }) {
	const progress = new ProgressBar({
		size: 2,
		color: "#29e",
		className: "bar-of-progress",
		delay: 80,
	});
	// route Change Start
	Router.events.on("routeChangeStart", () => progress.start());
	// route Change end
	Router.events.on("routeChangeComplete", () => progress.finish());
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
