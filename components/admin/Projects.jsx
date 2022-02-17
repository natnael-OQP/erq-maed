import Input from "./Input";
import InputFieldAndButton from "./InputFieldAndButton";
import Label from "./Label";
import Textarea from "./Textarea";

const Projects = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<h3 className="mb-3 text-xl font-normal tracking-wider text-gray-400 capitalize font-lato mt-14">
				Project
			</h3>
			<hr />
			<from className="mt-5 space-y-14">
				<div className="flex items-center justify-between ">
					<Label name="Id" to="ProjectId" />
					<Input id="ProjectId" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="Cover_image" to="ProjectCover_image" />
					<Input id="ProjectCover_image" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="title" to="ProjectTitle" />
					<Input id="ProjectTitle" type="text" />
				</div>
				<div className="flex justify-between ">
					<Label name="Description" to="ProjectDescription" />
					<Textarea textareaId="ProjectDescription" />
				</div>
				<div className="flex justify-between ">
					<Label name="Start_date" to="ProjectStart_date" />
					<Input id="ProjectStart_date" type="date" />
				</div>
				<InputFieldAndButton
					labelName="end_date"
					to="ProjectDate"
					inputId="ProjectDate"
					inputType="date"
					buttonText="Save"
				/>
			</from>
		</div>
	);
};

export default Projects;
