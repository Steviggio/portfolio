import React from 'react';
import renderer from 'react-test-renderer';
import Hover from './Hover';

// Mock projectInfos data
const projectInfos = [
  {
    name: 'Sample Project',
    role: 'Sample Role',
    tasks: ['Task 1', 'Task 2'],
  },

];

it('renders correctly with valid project name', () => {
  const tree = renderer.create(<Hover name="Sample Project" projectInfos={projectInfos} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders "Projet non trouvé" with invalid project name', () => {
  const tree = renderer.create(<Hover name="Invalid Project" projectInfos={projectInfos} />).toJSON();
  expect(tree).toMatchSnapshot();
});


