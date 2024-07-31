import { useMemo, Dispatch } from 'react';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';

import { categories } from '../data/categories';
import type { IActivity } from '../types';
import { ActivityActions } from '../reducers/activityReducer';

type ActivityListProps = {
	activities: IActivity[];
	dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({ activities, dispatch }: ActivityListProps) {
	const categoryName = useMemo(
		() => (category: IActivity['category']) =>
			categories.map((cat) => (cat.id === category ? cat.name : '')),
		[]
	);

	const isEmptyActivity = useMemo(() => activities.length === 0, [activities]);

	return (
		<>
			<h2 className='text-4xl font-bold to-slate-600 text-center'>Comida y Actividades</h2>

			{isEmptyActivity ? (
				<p className='text-center'>No hay actividades aún...</p>
			) : (
				activities.map((activity) => (
					<div
						key={activity.id}
						className='flex justify-between bg-white shadow px-5 py-10 mt-5'
					>
						<div className='space-y-2 relative'>
							<p
								className={`absolute text-white font-bold uppercase -top-8 -left-8 px-10 py-2 ${
									activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'
								} `}
							>
								{categoryName(activity.category)}
							</p>

							<p className='text-2xl font-bold pt-5'>{activity.name}</p>

							<p className='font-black text-4xl text-lime-500'>
								{activity.calories} {''}
								<span>Calorías</span>
							</p>
						</div>

						<div className='flex gap items-center space-x-8'>
							<button
								onClick={() =>
									dispatch({
										type: 'set-activityId',
										payload: { id: activity.id }
									})
								}
							>
								<PencilSquareIcon className='h-8 w-8 text-gray-800' />
							</button>

							<button
								onClick={() =>
									dispatch({
										type: 'delete-activityId',
										payload: { id: activity.id }
									})
								}
							>
								<XCircleIcon className='h-8 w-8 text-red-500' />
							</button>
						</div>
					</div>
				))
			)}
		</>
	);
}
