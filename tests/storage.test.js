import { saveProjects, getProjects } from '../src/storage';

global.localStorage = {};

const projectArrays = [{ name: 'project1' }];

describe('saveProjects', () => {
  it('Saves Project to LocalStorage', () => {
    saveProjects(projectArrays);
    expect(localStorage.allProjects).not.toBeNull();
  });
});

describe('getProjects', () => {
  it('Fetches Projects from LocalStorage', () => {
    expect(getProjects().length).toBe(1);
  });
});
