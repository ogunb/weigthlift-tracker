/// <reference types="react-scripts" />

type AppState = {
	user: {
		trainings: TrainingsType;
		bestTraining: {
			[key: string]: string;
		};
	};
	dispatch: (action: Action) => void;
};

type TrainingsType = {
	[index: string]: TrainingTypes;
};

type TrainingTypes = {
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
