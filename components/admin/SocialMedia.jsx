import Input from "./Input";
import InputFieldAndButton from "./InputFieldAndButton";
import Label from "./Label";
import Textarea from "./Textarea";

const SocialMedia = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<h3 className="mb-3 text-xl font-normal tracking-wider text-gray-400 capitalize font-lato mt-14">
				SocialMedia
			</h3>
			<hr />
			<from className="mt-5 space-y-14">
				<div className="flex items-center justify-between ">
					<Label name="Id" to="SocialMediaId" />
					<Input id="SocialMediaId" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="Icon" to="SocialMediaIcon" />
					<Input id="SocialMediaIcon" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="Link" to="SocialMediaLink" />
					<Input id="SocialMediaLink" type="text" />
				</div>
				<InputFieldAndButton
					labelName="Name"
					to="SocialMediaName"
					inputId="SocialMediaName"
					inputType="text"
					buttonText="Save"
				/>
			</from>
		</div>
	);
};

export default SocialMedia;
