import Input from "./Input";
import InputFieldAndButton from "./InputFieldAndButton";
import Label from "./Label";
import Textarea from "./Textarea";

const Event = () => {
	return (
		<div className="gap-y-2 flex flex-col">
			<h3 className="text-base text-gray-400 font-lato capitalize font-normal tracking-wider mb-3 mt-14">
				Event
			</h3>
			<hr />
			<from className="space-y-14 mt-5">
				<div className="flex items-center justify-between ">
					<Label name="id" to="eventId" />
					<Input id="eventId" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="cover_image" to="cover_imageTitle" />
					<Input id="cover_imageTitle" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="title" to="eventTitle" />
					<Input id="eventTitle" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="Description" to="eventDescription" />
					<Input id="eventDescription" type="text" />
				</div>
				<div className="flex  justify-between ">
					<Label name="Start_date" to="eventStart_date" />
					<Input id="eventStart_date" type="date" />
				</div>
				<div className="flex  justify-between ">
					<Label name="End_date" to="eventEnd_date" />
					<Input id="eventEnd_date" type="date" />
				</div>
				{/* checkbox */}
				<div className="flex items-center mb-4">
					<input
						id="Is_public"
						type="checkbox"
						name="Is_public"
						value="Is_public"
						className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
					/>
					<label
						htmlFor="Is_public"
						className="text-sm font-medium text-gray-900 ml-2 block"
					>
						Is_public
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="Is_limited"
						type="checkbox"
						name="Is_limited"
						value="Is_limited"
						className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
					/>
					<label
						htmlFor="Is_limited"
						className="text-sm font-medium text-gray-900 ml-2 block"
					>
						Is_limited
					</label>
				</div>
				<div className="flex items-center mb-4">
					<label
						htmlFor="Is_limited"
						className="text-sm font-medium text-gray-900  block"
					>
						Available_spots
					</label>
					<input
						id="available_spots"
						type="number"
						name="available_spots"
						value={10}
						className="ml-2 h-8 w-14 bg-slate-200 border-gray-300 rounded-md p-1"
					/>
				</div>
				<div className="flex  justify-between ">
					<Label name="Is_limited" to="eventIs_limited" />
					<Input id="eventIs_limited" type="number" />
				</div>
				<div className="flex  justify-between ">
					<div className="flex items-center mb-4">
						<input
							id="is_archived"
							type="checkbox"
							name="is_archived"
							value="is_archived"
							className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
						/>
						<label
							htmlFor="is_archived"
							className="text-sm font-medium text-gray-900 ml-2 block"
						>
							is_archived
						</label>
					</div>
					<div className="w-[500px] flex flex-col mt-10">
						<button
							className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded w-[100px]"
							type="button"
						>
							Save
						</button>
					</div>
				</div>
			</from>
		</div>
	);
};

export default Event;
