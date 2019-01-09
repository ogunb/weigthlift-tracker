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
	[x: string]: WorkoutTypes;
}

interface WorkoutTypes {
	[x: string]: exercise;
}

interface exercise {
	sets: number[][];
	isPyramid: boolean | null;
}

type removeExercise = (exercise: string, workoutDay: string) => void;
