import React from 'react';
import {shallow} from 'enzyme';

import Header from './header'

describe('<Header />', () => {
	it('renders without crashing', () => {
		shallow(<Header onGenerateAuralUpdate= {() => console.log('works')}
				onRestartGame= {() => console.log('restart')}/>);
	})
})