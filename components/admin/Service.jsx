import Input from "./Input";
import InputFieldAndButton from "./InputFieldAndButton";
import Label from "./Label";
import Textarea from "./Textarea";

const Service = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<h3 className="mb-3 text-xl font-normal tracking-wider text-gray-400 capitalize font-lato mt-14">
				Service
			</h3>
			<hr />
			<from className="mt-5 space-y-14">
				<div className="flex items-center justify-between ">
					<Label name="Id" to="ServiceId" />
					<Input id="ServiceId" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="name" to="ServiceName" />
					<Input id="ServiceName" type="text" />
				</div>
				<div className="flex justify-between ">
					<Label name="Description" to="ServiceDescription" />
					<Textarea textareaId="ServiceDescription" />
				</div>
				<InputFieldAndButton
					labelName="Cover_image"
					to="ServiceCover_image"
					inputId="ServiceCover_image"
					inputType="text"
					buttonText="Save"
				/>
			</from>
		</div>
	);
};

export default Service;
