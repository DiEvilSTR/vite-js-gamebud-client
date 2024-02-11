import './MatchesList.css'; // Assuming CSS file is in the same directory

import { useQuery } from 'react-query';

import { HTTP_METHOD, request } from '/src/utils'; // Import the updated request utility and HTTP_METHOD

const fetchMatches = async () => {
  const data = await request({
    url: 'bud_finder/matches/list',
    method: HTTP_METHOD.get,
  });
  return data;
};

export function MatchesList() {
  const { isLoading, error, data } = useQuery('matches', fetchMatches);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="matchesList">
      {data.map(({ id, buds }) =>
        buds.map(bud => (
          <div key={bud.uuid} className="matchItem" onClick={() => openBudProfile(bud.uuid)}>
            {/* Displaying the nickname of the bud, clickable to open the bud's profile */}
            {bud.nickname}
          </div>
        ))
      )}
    </div>
  );
}

// Function to handle opening a bud's profile, replace with actual implementation
function openBudProfile(uuid) {
  console.log(`Open profile for bud with UUID: ${uuid}`);
  // Implement profile opening logic here
}
