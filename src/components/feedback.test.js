import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback'

describe('<Feedback />', () => {
	it('renders without crashing', () => {
		shallow(<Feedback guessCount= '1' />);
	})
	it('renders the feedback message', () => {
		const key= '1';
		const feedback_message= 'Hotter';
		const guessAgain_message= 'guess again';
		const wrapper = shallow(<Feedback feedback= {feedback_message} guessAgain= {guessAgain_message}/>);
		expect(wrapper.contains(feedback_message)).toEqual(true);
	})
})