import { useState, useEffect } from 'react';

export function UserCounter() {
  const [userCount, setUserCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://your-api-url.com/users/count');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserCount(data.count); // Assuming the API returns an object with a count property
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserCount();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Your component's content */}
      <p>Registered Users: {userCount}</p>
    </div>
  );
}
