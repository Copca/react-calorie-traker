type CaloriesDisplayProps = {
	text: string;
	calories: number;
};

export default function CaloriesDisplay({ text, calories }: CaloriesDisplayProps) {
	return (
		<p className='text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center'>
			<span className='font-black text-6xl text-orange-500'>{calories}</span>
			{text}
		</p>
	);
}
