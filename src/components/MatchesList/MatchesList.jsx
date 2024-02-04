import './MatchesList.css'; // Assuming CSS file is in the same directory

import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMatches = async () => {
  const { data } = await axios.get('/me/matches');
  return data;
};

export function MatchesList() {
  const { isLoading, error, data } = useQuery('matches', fetchMatches);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="matchesList">
      {data.map(match => (
        <div key={match.id} className="matchItem">
          {match.name} {/* Assuming each match has an id and name */}
        </div>
      ))}
    </div>
  );
}
