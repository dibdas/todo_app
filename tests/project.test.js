import projectObject from '../src/project';

describe('projectObject', () => {
  it('Creates a Project Object', () => {
    const newProject = projectObject('Hercules');
    expect(newProject.projectName).toBe('Hercules');
  });
});