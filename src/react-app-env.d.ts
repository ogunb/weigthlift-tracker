/// <reference types="react-scripts" />

type AppState = {
	user: {
		workouts: WorkoutsType;
		bestWorkout: {
			[key: string]: string;
		};
	};
	dispatch?: (action: Action) => void;
	auth: any;
};

type WorkoutsType = {
	[index: string]: WorkoutTypes;
};

type WorkoutTypes = {
	[index: string]: exercise;
};

type exercise = {
	sets: [array];
	isPyramid: boolean;
};

type Action = {
	type: string;
	payload: object | array;
};
