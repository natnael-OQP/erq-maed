import Input from "./Input";
import InputFieldAndButton from "./InputFieldAndButton";
import Label from "./Label";
import Textarea from "./Textarea";

const Blog = () => {
	return (
		<div className="gap-y-2 flex flex-col">
			<h3 className="text-base text-gray-400 font-lato capitalize font-normal tracking-wider mb-3 mt-14">
				Blog
			</h3>
			<hr />
			<from className="space-y-14 mt-5">
				<div className="flex items-center justify-between ">
					<Label name="id" to="blogId" />
					<Input id="blogId" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="title" to="blogTitle" />
					<Input id="blogTitle" type="text" />
				</div>
				<div className="flex items-center justify-between ">
					<Label name="Author" to="blogAuthor" />
					<Input id="blogAuthor" type="text" />
				</div>
				<div className="flex  justify-between ">
					<Label name="body" to="blogBody" />
					<Textarea textareaId="blogBody" />
				</div>
				<InputFieldAndButton
					labelName="date"
					to="blogDate"
					inputId="blogDate"
					inputType="date"
					buttonText="Save"
				/>
			</from>
		</div>
	);
};

export default Blog;
