import "./App.css";
import DataService from "./dataService";
import { Component } from "react";

export default class App extends Component {
  state = {};

  componentDidMount() {
    // little workaround because working w/o router :-)
    let user = window.location.pathname.split("/")[1];
    const dataService = new DataService();
    dataService.getGitHubUser(user).then((response) => {
      this.setState(response.data);
    }).catch(error => {
      this.setState({error: 'request error'});
    });
  }

  render() {
    return (
      <div>
        <h3>GitHub User Info</h3>
        <ul>
          {Object.keys(this.state).map((i) => (
            <li key={i}>
              {i}: {this.state[i]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
