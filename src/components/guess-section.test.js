import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section'

describe('<GuessSection />', () => {
	it('renders without crashing', () => {
		let feedback= 'none'
		shallow(<GuessSection guessCount= '1' feedback= {feedback} />);
	})
})