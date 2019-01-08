import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Consumer, exercises } from '../context';
import Nav from './Nav';
import Header from './Header';

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

const getSuggestionValue = (suggestion: string) => suggestion;

const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>;

type AddWorkoutProps = {
	isPyramid: boolean | null;
	value: string;
	suggestions: string[];
};

export class AddWorkout extends Component<any, AddWorkoutProps> {
	state = {
		isPyramid: false,
		value: '',
		suggestions: []
	};
	onChange = (event: any, { newValue }: { newValue: string }) => {
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

	render() {
		return (
			<Consumer>
				{consume => {
					const { value, suggestions, isPyramid } = this.state;
					const inputProps = {
						className: 'form-control form-control-lg',
						id: 'exampleInputEmail1',
						placeholder: 'Egzersiz ismini girin...',
						value,
						onChange: this.onChange
					};
					const theme = {
						container: 'autosuggest',
						input: 'form-control',
						suggestionsContainer: 'dropdown',
						suggestionsList: `dropdown-menu ${
							suggestions.length ? 'show' : ''
						}`,
						suggestion: 'dropdown-item',
						suggestionFocused: 'active'
					};
					if (isPyramid === false) {
						return (
							<>
								<Header />
								<div className="container">
									<h3 className="text-center">Yeni Egzersiz</h3>
									<form>
										<div className="form-group">
											<label htmlFor="egzersiz">Egzersiz</label>
											<Autosuggest
												suggestions={suggestions}
												onSuggestionsFetchRequested={
													this.onSuggestionsFetchRequested
												}
												getSuggestionValue={getSuggestionValue}
												onSuggestionsClearRequested={
													this.onSuggestionsClearRequested
												}
												renderSuggestion={renderSuggestion}
												inputProps={inputProps}
												theme={theme}
											/>
										</div>
										<button
											type="submit"
											className="btn btn-primary btn-block btn-lg"
										>
											Submit
										</button>
									</form>
								</div>
								<Nav />
							</>
						);
					} else if (isPyramid === true) {
						return (
							<>
								<Header />
								<div className="container">
									<h3 className="text-center">pyramid</h3>
									<form>
										<input type="text" />
									</form>
								</div>
								<Nav />
							</>
						);
					}
					return (
						<>
							<Header />
							<div className="container">
								<h3 className="text-center">Yeni Egzersiz</h3>
								<form>
									<input type="text" />
								</form>
							</div>
							<Nav />
						</>
					);
				}}
			</Consumer>
		);
	}
}

export default AddWorkout;
