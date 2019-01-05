/// <reference types="react-scripts" />

interface AppState {
	user: {
		trainings: {
			[key: string]: [][];
		};
		bestTraining: {
			[key: string]: string;
		};
	};
	dispatch: (action: Action) => void;
}

interface Action {
	type: string;
	payload: object;
}
