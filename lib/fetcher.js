import axios from "axios";
import useSWR from "swr";

export const fetcher = async (url) => {
    const { data } = await axios.get(url)
    return data;
};
export const  Use_Fetch = (url)=> {
	const { data, error } = useSWR(url, fetcher,{ refreshInterval: 1000 });
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	};
}