import { useReducer, useEffect, useMemo } from 'react';

import { activityReducer, initialState } from './reducers/activityReducer';

import Form from './components/Form';
import ActivityList from './components/ActivityList';
import CalorieTraker from './components/CalorieTraker';

function App() {
	const [state, dispatch] = useReducer(activityReducer, initialState);

	useEffect(() => {
		localStorage.setItem('activities', JSON.stringify(state.activities));
	}, [state.activities]);

	const canRestartApp = useMemo(() => state.activities.length, [state.activities]);

	return (
		<>
			<header className='bg-lime-600 py-3'>
				<div className='flex justify-between max-w-4xl mx-auto items-center'>
					<h1 className='text-center text-lg font-bold text-white uppercase'>
						Contador de Calorias
					</h1>

					<button
						className='bg-gray-800 hover:bg-gray-900 font-bold uppercase text-white cursor-pointer rounded-lg text-sm p-2 disabled:opacity-10'
						disabled={!canRestartApp}
						onClick={() => dispatch({ type: 'restar-app' })}
					>
						Reiniciar App
					</button>
				</div>
			</header>

			<section className='bg-lime-500 py-20 px-5'>
				<div className='max-w-4xl mx-auto'>
					<Form state={state} dispatch={dispatch} />
				</div>
			</section>

			<section className='bg-gray-800 p-10'>
				<div className='max-w-4xl mx-auto'>
					<CalorieTraker activities={state.activities} />
				</div>
			</section>

			<section className='max-w-4xl mx-auto p-10'>
				<ActivityList activities={state.activities} dispatch={dispatch} />
			</section>
		</>
	);
}

export default App;
