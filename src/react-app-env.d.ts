/// <reference types="react-scripts" />

interface AppState {
	user: {
		workouts: WorkoutsType;
		bestWorkout: {
			[key: string]: string;
		};
		loading: boolean;
	};
	auth: boolean | null | string;
}

interface WorkoutsType {
	[key: string]: WorkoutTypes;
}

interface WorkoutTypes {
	[key: string]: exercise;
}

interface exercise {
	sets: number[][];
	isPyramid: boolean;
}
