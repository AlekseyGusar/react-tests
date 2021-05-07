const axios = require("axios");
import DataService from '../dataService';
import renderer from 'react-test-renderer'; 

describe('testing api requests', () => {
  let dataService;

  beforeEach(() => {
    dataService = new DataService(); 
  });

  test('should return gitHub user information', async () => {
    const info = { response: "SomeString" };
    const resp = { data: info };
    jest.spyOn(axios, "get").mockResolvedValueOnce(resp);
    const res = await dataService.getGitHubUser('AlexeyGusar');
    expect(res.data.response).toContain("SomeString");
  });

  test('the fetch fails with an error', async () => {
    jest.spyOn(axios, "get").mockRejectedValueOnce('request error');
    await expect(dataService.getGitHubUser('AlexeyGusar')).rejects.toMatch('request error');
  });
});

describe('snapshot tests', () => {
  test('header renders correctly', () => {
    const wrapper = renderer.create(<h3>GitHub User Info</h3>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('first item renders correctly', () => {
    const wrapper = renderer.create(<li>"login: AlekseyGusar"</li>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
   
});