import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import { exercises } from '../../App';
import WeightsForm from './WeightsForm';
import RepsForm from './RepsForm';

type FormState = {
	value: string;
	suggestions: string[];
	defaultSet: number;
};
type FormProp = {
	day: string;
	workoutName: string;
	workout: exercise;
	isPyramid: boolean | null;
	onNewWorkout: (newWorkout: WorkoutsType, exercise: string) => void;
};

const getSuggestions = (value: string): string[] => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	return inputLength === 0
		? []
		: exercises.filter((ex: string) => ex.toLowerCase().includes(inputValue));
};

export class WorkoutForm extends Component<FormProp, FormState> {
	state = {
		value: '',
		suggestions: [],
		defaultSet: 3
	};

	private date = createRef<HTMLInputElement>();
	private set = createRef<HTMLInputElement>();

	componentDidMount() {
		const { day, workout, workoutName, isPyramid } = this.props;
		this.date.current!.value = day;
		for (let i = 0; i < workout.sets.length; i++) {
			if (isPyramid) {
				(findDOMNode(this.refs['weight' + i])!
					.lastChild as HTMLInputElement).value = workout.sets[i][0] + '';
				(findDOMNode(this.refs['rep' + i])!
					.lastChild as HTMLInputElement).value = workout.sets[i][1] + '';
			} else {
				(findDOMNode(this.refs['weight0'])!
					.lastChild as HTMLInputElement).value = workout.sets[0][0] + '';
				(findDOMNode(this.refs['rep0'])!.lastChild as HTMLInputElement).value =
					workout.sets[0][1] + '';
				break;
			}
		}
		this.setState({
			value: workoutName,
			defaultSet: workout.sets.length
		});
	}

	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const suggestions = getSuggestions(value);
		this.setState({
			value,
			suggestions
		});
	};

	submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const { isPyramid, onNewWorkout } = this.props;
		const exercise = this.state.value;
		if (!exercises.includes(exercise)) return;
		const date = this.date.current!.value;
		const sets = [];
		for (let i = 0; i < this.state.defaultSet; i++) {
			let weightInput, repInput;
			if (isPyramid) {
				weightInput = findDOMNode(this.refs['weight' + i])!
					.lastChild as HTMLInputElement;
				repInput = findDOMNode(this.refs['rep' + i])!
					.lastChild as HTMLInputElement;
			} else {
				weightInput = findDOMNode(this.refs['weight0'])!
					.lastChild as HTMLInputElement;
				repInput = findDOMNode(this.refs['rep0'])!
					.lastChild as HTMLInputElement;
			}
			sets.push([parseInt(weightInput.value), parseInt(repInput.value)]);
		}
		const properWorkoutObj: WorkoutsType = {
			[date]: {
				[exercise]: {
					sets,
					isPyramid
				}
			}
		};
		onNewWorkout(properWorkoutObj, exercise);
	};

	onSetChange = (event: any, isPlus: boolean = false) => {
		const defaultSet =
			parseInt((event.target as HTMLInputElement).value) || isPlus
				? this.state.defaultSet + 1
				: this.state.defaultSet - 1;
		this.setState({
			defaultSet
		});
	};

	onSuggestionClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
		const value: string | null = (e.target as HTMLElement).textContent;
		if (value) {
			const suggestions: [] = [];
			this.setState({
				value,
				suggestions
			});
		}
	};

	render() {
		const { suggestions, value, defaultSet } = this.state;
		const { isPyramid } = this.props;
		const weightAndReps: any[] = [];
		for (let i = 0; i < defaultSet; i++) {
			weightAndReps.push(
				<React.Fragment key={i}>
					<WeightsForm ref={'weight' + i} />
					<RepsForm ref={'rep' + i} />
				</React.Fragment>
			);
		}
		return (
			<form onSubmit={this.submitForm}>
				<div className="form-group position-relative">
					<label htmlFor="egzersiz">Egzersiz</label>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Egzersiz ismini girin..."
						value={value}
						onChange={this.onChange}
						required={true}
					/>
					{suggestions.length > 0 ? (
						<ul
							className="dropdown suggestions__dropdown list-group"
							onClick={this.onSuggestionClick}
						>
							{suggestions.map(suggestion => (
								<li className="dropdown-item list-item" key={suggestion}>
									{suggestion}
								</li>
							))}
						</ul>
					) : null}
				</div>
				<div className="input-group">
					<div className="input-group-append">
						<span className="input-group-text">Tarih</span>
					</div>
					<input
						type="date"
						className="form-control form-control-lg"
						ref={this.date}
						required
					/>
				</div>
				{isPyramid ? (
					weightAndReps
				) : (
					<React.Fragment>
						<WeightsForm ref={'weight0'} />
						<RepsForm ref={'rep0'} />
					</React.Fragment>
				)}
				{isPyramid ? (
					<>
						<div className="input-group mt-3">
							<div className="input-group-append">
								<span className="input-group-text">Set</span>
							</div>
							<input
								type="number"
								className="form-control form-control-lg"
								value={defaultSet}
								disabled
								ref={this.set}
								required
							/>
						</div>
						<button
							type="button"
							onClick={e => this.onSetChange(e, true)}
							className="btn btn-block btn-outline-warning btn-sm mt-2"
						>
							Set ekle
						</button>
						<button
							type="button"
							onClick={e => this.onSetChange(e, false)}
							className="btn btn-block btn-outline-danger btn-sm mt-2"
						>
							Set sil
						</button>
					</>
				) : (
					<div className="input-group mt-3">
						<div className="input-group-append">
							<span className="input-group-text">Set</span>
						</div>
						<input
							type="number"
							className="form-control form-control-lg"
							defaultValue={defaultSet + ''}
							ref={this.set}
							onChange={this.onSetChange}
							required
						/>
					</div>
				)}
				<button type="submit" className="btn btn-primary btn-block btn-lg mt-5">
					Ekle
				</button>
			</form>
		);
	}
}

export default WorkoutForm;
