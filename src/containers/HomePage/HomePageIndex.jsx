import { useContext } from 'react';

import { Page } from '/src/components';
import './HomePageIndex.css';

import gamebudLogoSrc from '/src/assets/brand/gamebud.svg';

export function HomePageIndex() {
  // const auth = useContext(AuthCtx);
  // const query = useQuery('todos', getTodos);

  return (
    <Page>
      <div className="page__hero section__padding" id="home">
        <div className="page__hero-content">
          <h1 className="gradient__text">
            Find Your Perfect Gaming Match <br />
            Play Together <br />
            Win Together
          </h1>
          <p>
            GameBud is your premier gaming partner finder, designed to connect you with fellow gamers from around the
            world. Whether you’re looking to conquer co-op campaigns, dominate in competitive play, or just enjoy a
            casual game night, GameBud makes it easy to find the right players for your team.
          </p>
          <div className="page__hero-content__people">
            <p>Join 666 people registered at GameBud</p>
          </div>
        </div>
        <div className="page__hero-image">
          <img src={gamebudLogoSrc} alt="" />
        </div>
      </div>
    </Page>
  );
}
