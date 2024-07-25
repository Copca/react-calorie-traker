import { useState, ChangeEvent } from 'react';

import type { IActivity } from '../types';
import { categories } from '../data/categories';

export default function Form() {
	const [activity, setActivity] = useState<IActivity>({
		category: 1,
		name: '',
		calories: 0
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
		const isNumberField = ['category', 'calories'].includes(e.target.name); // => true/false

		setActivity({
			...activity,
			[e.target.name]: isNumberField ? +e.target.value : e.target.value // +e convierte el string en number
		});
	};

	const isValidActivity = () => {
		const { name, calories } = activity;
		return name.trim() !== '' && calories > 0;
	};

	return (
		<form className='space-y-5 bg-white shadow shadow-black rounded-lg p-10'>
			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='category' className='font-bold'>
					Categoría:
				</label>

				<select
					name='category'
					id='category'
					className='bg-white border border-slate-300 rounded-lg p-2 w-full'
					value={activity.category}
					onChange={handleChange}
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='name' className='font-bold'>
					Actividad:
				</label>

				<input
					type='text'
					id='name'
					name='name'
					className='border border-slate-300 rounded-lg p-2'
					placeholder='Ej. Comida, Jugo de Naranja, Enasalada, Ejercicio, Pesas, Bicicleta'
					value={activity.name}
					onChange={handleChange}
				/>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='calories' className='font-bold'>
					Calorías:
				</label>

				<input
					type='number'
					id='calories'
					name='calories'
					className='border border-slate-300 rounded-lg p-2'
					placeholder='Ej. 300 o 500'
					value={activity.calories}
					onChange={handleChange}
				/>
			</div>

			<input
				type='submit'
				className='bg-gray-800 hover:bg-gray-900 text-white w-full font-bold uppercase p-2 disabled:opacity-10'
				value='Guardar Comida o Guardar Ejercicio'
				disabled={!isValidActivity()}
			/>
		</form>
	);
}
