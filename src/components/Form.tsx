import { categories } from '../data/categories';

export default function Form() {
	return (
		<form className='space-y-5 bg-white shadow shadow-black rounded-lg p-10'>
			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='category' className='font-bold'>
					Categoría:
				</label>

				<select
					name=''
					id='category'
					className='bg-white border border-slate-300 rounded-lg p-2 w-full'
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='activity' className='font-bold'>
					Actividad:
				</label>

				<input
					type='text'
					id='activity'
					className='border border-slate-300 rounded-lg p-2'
					placeholder='Ej. Comida, Jugo de Naranja, Enasalada, Ejercicio, Pesas, Bicicleta'
				/>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='calories' className='font-bold'>
					Calorías:
				</label>

				<input
					type='number'
					id='calories'
					className='border border-slate-300 rounded-lg p-2'
					placeholder='Ej. 300 o 500'
				/>
			</div>

			<input
				type='submit'
				className='bg-gray-800 hover:bg-gray-900 text-white w-full font-bold uppercase p-2'
				value='Guardar Comida o Guardar Ejercicio'
			/>
		</form>
	);
}
