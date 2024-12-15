// NOTE: this just for displaying common components that we use in our application and will not be in productions

import CustomButton from '../../components/CustomButton';

const ComponentExamples = () => {
	return (
		<div className="h-screen w-full">
			<div>
				<p className="text-lg">Button:</p>

				<CustomButton>Button</CustomButton>
			</div>
		</div>
	);
};

export default ComponentExamples;
