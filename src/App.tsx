import { useReducer } from 'react';

import { activityReducer, initialState } from './reducers/activityReducer';

import Form from './components/Form';
import ActivityList from './components/ActivityList';

function App() {
	const [state, dispatch] = useReducer(activityReducer, initialState);

	return (
		<>
			<header className='bg-lime-600 py-3'>
				<div className='flex justify-between max-w-4xl mx-auto'>
					<h1 className='text-center text-lg font-bold text-white uppercase'>
						Contador de Calorias
					</h1>
				</div>
			</header>

			<section className='bg-lime-500 py-20 px-5'>
				<div className='max-w-4xl mx-auto'>
					<Form state={state} dispatch={dispatch} />
				</div>
			</section>

			<section className='max-w-4xl mx-auto p-10'>
				<ActivityList activities={state.activities} dispatch={dispatch} />
			</section>
		</>
	);
}

export default App;
