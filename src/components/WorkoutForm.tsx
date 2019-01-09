import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import Autosuggest from 'react-autosuggest';
import { Consumer, exercises } from '../context';
import WeightsForm from './WeightsForm';
import RepsForm from './RepsForm';

const getSuggestions = (value: string): string[] => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	return inputLength === 0
		? []
		: exercises.filter((exercise: string) => {
				const words = exercise.split(' ');
				for (let i = 0; i < words.length; i++) {
					const lowerCase: string = words[i].toLowerCase();
					if (lowerCase.slice(0, inputLength) === inputValue) {
						return true;
					}
				}
				return false;
		  });
};

const getSuggestionValue = (suggestion: string): string => suggestion;

const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>;

type FormState = {
	value: string;
	suggestions: string[];
	defaultSet: number;
};
type FormProp = {
	isPyramid: boolean;
};

export class WorkoutForm extends Component<any, FormState, FormProp> {
	state = {
		value: '',
		suggestions: [],
		defaultSet: 2
	};

	private date = createRef<HTMLInputElement>();
	private set = createRef<HTMLInputElement>();

	onChange = (e: any, { newValue }: { newValue: string }) => {
		this.setState({
			value: newValue
		});
	};

	onSuggestionsFetchRequested = ({ value }: { value: string }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	submitForm = (
		e: React.MouseEvent<HTMLElement>,
		dispatch: ((action: Action) => void) | undefined
	): void => {
		e.preventDefault();
		const exercise = this.state.value;
		const date = this.date.current!.value;
		const set = this.set.current!.value;
		const weights = [];
		const reps = [];
		for (let i = 0; i < this.state.defaultSet; i++) {
			if (
				!findDOMNode(this.refs['weight' + i]) ||
				!findDOMNode(this.refs['rep' + i])
			) {
				break;
			}
			const weightInput = findDOMNode(this.refs['weight' + i])!
				.lastChild as HTMLInputElement;
			const repInput = findDOMNode(this.refs['rep' + i])!
				.lastChild as HTMLInputElement;
			weights.push(weightInput.value);
			reps.push(repInput.value);
		}
		console.log(exercise, date, set, weights, reps);
	};

	onSetPlus = (e: any) => {
		const defaultSet = e.target.value || this.state.defaultSet + 1;
		this.setState({
			defaultSet
		});
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
		const inputProps = {
			className: 'form-control form-control-lg',
			id: 'exampleInputEmail1',
			placeholder: 'Egzersiz ismini girin...',
			value,
			onChange: this.onChange
			// required: true
		};
		const theme = {
			container: 'autosuggest',
			input: 'form-control',
			suggestionsContainer: 'dropdown',
			suggestionsList: `dropdown-menu ${suggestions.length ? 'show' : ''}`,
			suggestion: 'dropdown-item',
			suggestionFocused: 'active'
		};
		return (
			<Consumer>
				{context => {
					const { dispatch } = context;
					return (
						<form onSubmit={(e: any) => this.submitForm(e, dispatch)}>
							<div className="form-group">
								<label htmlFor="egzersiz">Egzersiz</label>
								<Autosuggest
									suggestions={suggestions}
									onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
									getSuggestionValue={getSuggestionValue}
									onSuggestionsClearRequested={this.onSuggestionsClearRequested}
									renderSuggestion={renderSuggestion}
									inputProps={inputProps}
									theme={theme}
								/>
							</div>
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text">Tarih</span>
								</div>
								<input
									type="date"
									className="form-control form-control-lg"
									ref={this.date}
									// required
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
											// required
										/>
									</div>
									<button
										type="button"
										onClick={this.onSetPlus}
										className="btn btn-block btn-outline-warning btn-sm mt-2"
									>
										Add another set
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
										onChange={this.onSetPlus}
										// required
									/>
								</div>
							)}
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg mt-5"
							>
								Ekle
							</button>
						</form>
					);
				}}
			</Consumer>
		);
	}
}

export default WorkoutForm;
