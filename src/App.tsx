import React from 'react';
import './App.css';
import teamsData from './data/CollegeBasketballTeams.json';

interface TeamInfo {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Header() {
  return (
    <div>
      <h1>Welcome to my March Madness website!</h1>
      <p>
        This website will list out information about all the colleges in the
        NCAA Basketball
      </p>
    </div>
  );
}

class Team extends React.Component<TeamInfo> {
  render() {
    const oneTeam = this.props;

    return (
      <div style={{ textAlign: 'left', margin: '20px' }}>
        <h3>School Name: {oneTeam.school}</h3>
        <h5>Mascot: {oneTeam.name}</h5>
        <h5>
          Location: {oneTeam.city}, {oneTeam.state}
        </h5>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
