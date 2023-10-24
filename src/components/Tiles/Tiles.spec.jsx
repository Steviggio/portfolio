import React from 'react';
import renderer from 'react-test-renderer';
import Tiles from './Tiles';

// Mock data for testing
const mockData = [
  {
    key: 1,
    iconUrl: 'icon1.png',
    name: 'Language 1',
  },
  {
    key: 2,
    iconUrl: 'icon2.png',
    name: 'Language 2',
  },
];

describe('Tiles Component', () => {
  it('renders the component with mock data', () => {
    const component = renderer.create(<Tiles datas={mockData} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
