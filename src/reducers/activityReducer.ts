import type { IActivity } from '../types';

export type ActivityActions =
	| { type: 'save-activity'; payload: { newActivity: IActivity } }
	| { type: 'set-activityId'; payload: { id: IActivity['id'] } }
	| { type: 'delete-activityId'; payload: { id: IActivity['id'] } }
	| { type: 'restar-app' };

export type ActivityState = {
	activities: IActivity[];
	activeId: IActivity['id'];
};

// Obtiene datos de LocalStorage || []
const localStorageActivities = (): IActivity[] => {
	const activities = localStorage.getItem('activities');
	return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
	activities: localStorageActivities(),
	activeId: ''
};

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
	if (action.type === 'save-activity') {
		let updatedActivities: IActivity[] = [];

		if (state.activeId) {
			// Editando actividad
			updatedActivities = state.activities.map((act) =>
				act.id === state.activeId ? action.payload.newActivity : act
			);
		} else {
			// Agregando nueva actividad
			updatedActivities = [...state.activities, action.payload.newActivity];
		}

		return {
			...state,
			activities: updatedActivities
		};
	}

	if (action.type === 'set-activityId') {
		return {
			...state,
			activeId: action.payload.id
		};
	}

	if (action.type === 'delete-activityId') {
		return {
			...state,
			activities: state.activities.filter(
				(activityState) => activityState.id !== action.payload.id
			)
		};
	}

	if (action.type === 'restar-app') {
		return {
			activities: [],
			activeId: ''
		};
	}

	return state;
};
