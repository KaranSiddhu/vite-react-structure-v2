import { Button } from '@nextui-org/react';
import React from 'react';
import cn from '../utils/classNames';

interface CustomButtonProps {
	children: React.ReactNode;
	className?: string;
	onPress?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'shadow' | 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'ghost';
	isLoading?: boolean;
	LoaderSpinner?: React.ReactNode;
	StartIcon?: React.ReactNode;
	EndIcon?: React.ReactNode;
	isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	className,
	onPress,
	variant,
	LoaderSpinner,
	StartIcon,
	EndIcon,
	type = 'button',
	isLoading = false,
	isDisabled = false
}) => {
	return (
		<Button
			className={cn(className)} // Add default classes according to figma
			isDisabled={isDisabled}
			isLoading={isLoading}
			spinner={LoaderSpinner}
			variant={variant}
			type={type}
			onPress={onPress}
			startContent={StartIcon}
			endContent={EndIcon}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
