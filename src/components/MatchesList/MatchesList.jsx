import './MatchesList.css';

import { useQuery } from 'react-query';

import { authRequest, HTTP_METHOD } from '/src/utils';

// Function to fetch matches
const fetchMatches = async () => {
  // Using authRequest to include credentials
  const data = await authRequest({
    url: 'v1/bud_finder/matches/list',
    method: HTTP_METHOD.get,
  });
  return data;
};

export function MatchesList() {
  const { isLoading, error, data } = useQuery('matches', fetchMatches);

  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="matchesList">
      {data.map(match => (
        <div key={match.id} className="matchItem" onClick={() => openBudProfile(match.bud.uuid)}>
          {match.bud.nickname}
        </div>
      ))}
    </div>
  );
}

// Function to handle opening a bud's profile
function openBudProfile(uuid) {
  console.log(`Open profile for bud with UUID: ${uuid}`);
  // Implement the logic to open the bud's profile here
}
