import { Page } from '/src/components';
import { PageHeader } from '/src/components/Page/PageHeader';
import { ButtonColored } from '/src/components/Button';

import './SignUpPage.css';

export function SignUpPage() {
  return (
    <Page header={<PageHeader />}>
      <div className="sign-up-page__hero section__padding">
        <div className="sign-up-page__hero-content">
          <h1 className="gradient__text">
            Find Your Perfect Gaming Match <br />
            Play Together <br />
            Win Together
          </h1>
          <p>
            GameBud is your premier gaming partner finder, designed to connect you with fellow gamers from around the
            world. Whether you’re looking to conquer co-op campaigns, dominate in competitive play, or just enjoy a
            casual game night, GameBud makes it easy to find the right players for your party.
          </p>
          <div className="sign-up-page__hero-content__people">
            <p>Join thousands of gamers registered at GameBud</p>
          </div>
        </div>
        <div className="sign-up-page__hero-content__sign-in-email-input">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <ButtonColored type="button">Sign up</ButtonColored>
        </div>
      </div>
    </Page>
  );
}
