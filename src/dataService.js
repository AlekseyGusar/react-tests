import axios from 'axios';

export default class DataService {
    async getGitHubUser(user) {
        const URI = `https://api.github.com/users/${user}`;
        return await axios.get(URI);
    }
}