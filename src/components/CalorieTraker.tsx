import { useMemo } from 'react';
import type { IActivity } from '../types';
import CaloriesDisplay from './CaloriesDisplay';

type CalorieTrakerProps = {
	activities: IActivity[];
};

export default function CalorieTraker({ activities }: CalorieTrakerProps) {
	// Contadores
	const caloriesConsumed = useMemo(
		() =>
			activities.reduce(
				(total, activityState) =>
					activityState.category === 1 ? total + activityState.calories : total,
				0
			),
		[activities]
	);

	const caloriesBurned = useMemo(
		() =>
			activities.reduce(
				(total, activityState) =>
					activityState.category === 2 ? total + activityState.calories : total,
				0
			),
		[activities]
	);

	const netCalories = useMemo(
		() => caloriesConsumed - caloriesBurned,
		[caloriesBurned, caloriesConsumed]
	);
	return (
		<>
			<h2 className='text-4xl font-black text-white text-center'>Resumen de Calorías</h2>

			<div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
				<CaloriesDisplay text='Consumidas' calories={caloriesConsumed} />

				<CaloriesDisplay text='Ejercicio' calories={caloriesBurned} />

				<CaloriesDisplay text='Diferencia' calories={netCalories} />
			</div>
		</>
	);
}
