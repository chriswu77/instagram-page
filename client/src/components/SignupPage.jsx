/* eslint-disable no-useless-escape */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FormInput from './FormInput';
import FooterLink from './FooterLink';
import { authActions } from '../../store/auth';

// STYLED COMPONENTS
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box = styled(ColumnContainer)`
  background-color: rgb(255, 255, 255);
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
`;

const MainContent = styled(ColumnContainer)`
  align-items: center;
  max-width: 350px;
  // margin-top: 12px;
  margin-top: 140px;
  margin-bottom: 44px;
`;

const FirstBox = styled(Box)`
  padding: 0 35px;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 75px;
  margin-bottom: 10px;
  align-self: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Heading = styled.h2`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const ShowButton = styled.button`
  visibility: ${(props) => (props.password.length > 0 ? 'visible' : 'hidden')};
  position: absolute;
  top: 17px;
  right: 30px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

const SignupButton = styled.button`
  width: 258px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #0095f6;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 8px 0;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

const SplitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 18px;
  align-items: center;
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: #dbdbdb;
  width: 100%;
`;

const OrText = styled.p`
  margin: 0 18px;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  text-transform: uppercase;
  color: #8e8e8e;
`;

const FacebookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #0095f6;
  border-radius: 4px;
  padding: 5px 9px;
  margin: 8px 0;
  cursor: pointer;
`;

const FacebookText = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

const AgreeText = styled.p`
  color: #8e8e8e;
  font-size: 12px;
  line-height: 16px;
  margin: 10px 0;
  text-align: center;
`;

const LoginBox = styled(Box)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  font-size: 14px;
  width: 100%;
`;

const LoginText = styled.span`
  color: #262626;
`;

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  color: #0095f6;
  font-weight: 600;
  margin-left: 3px;
  font-size: 14px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: #ed4956;
  font-size: 14px;
  line-height: 18px;
  margin: 10px 0;
  text-align: center;
`;

const AppText = styled.p`
  color: #262626;
  font-size: 14px;
  line-height: 18px;
  margin: 10px 0;
  text-align: center;
`;

const DownloadsContainer = styled.div`
  display: flex;
`;

const DownloadImg = styled.img`
  height: 40px;
`;

const FooterContent = styled(ColumnContainer)`
  margin-bottom: 52px;
`;

const LinksContainer = styled(ColumnContainer)`
  margin-top: 24px;
`;

const LinksRow = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoRow = styled(LinksRow)`
  margin: 12px 0;
`;

const InfoText = styled.span`
  color: #8e8e8e;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

// STYLED COMPONENTS END

const SignupPage = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [showButton, setShowButton] = useState(false);
  const [valid, setValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [redirectTo, setRedirectTo] = useState();

  const validateInputs = (
    emailInput,
    nameInput,
    usernameInput,
    passwordInput
  ) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      emailInput.match(emailRegex) &&
      passwordInput.length >= 6 &&
      nameInput &&
      usernameInput
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleEmailInput = (e) => {
    const input = e.target.value;
    setEmail(input);
    validateInputs(input, name, username, password);
  };

  const handleNameInput = (e) => {
    const input = e.target.value;
    setName(input);
    validateInputs(email, input, username, password);
  };

  const handleUsernameInput = (e) => {
    const input = e.target.value;
    setUsername(input);
    validateInputs(email, name, input, password);
  };

  const handlePasswordInput = (e) => {
    const input = e.target.value;
    setPassword(input);
    validateInputs(email, name, username, input);

    if (input) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleShowBtnClick = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setRedirectTo('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/users', {
      email,
      name,
      username,
      password,
    });

    if (res.data.error) {
      setShowError(true);
    } else {
      setShowError(false);
      setRedirectTo('/login');
    }
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

  return (
    <Section>
      <MainContainer>
        <MainContent>
          <FirstBox>
            <Logo src="logo.png" />
            <Heading>
              Sign up to see photos and videos from your friends.
            </Heading>
            <SignupForm onSubmit={handleSubmit}>
              <FacebookButton type="button">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="facebook-icon signup"
                />
                <FacebookText>Log in with Facebook</FacebookText>
              </FacebookButton>
              <SplitContainer>
                <HorizontalLine />
                <OrText>or</OrText>
                <HorizontalLine />
              </SplitContainer>
              <FormInput
                type="email"
                text="Email"
                onChange={handleEmailInput}
              />
              <FormInput
                type="text"
                text="Full Name"
                onChange={handleNameInput}
              />
              <FormInput
                type="text"
                text="Username"
                onChange={handleUsernameInput}
              />
              <PasswordContainer>
                <FormInput
                  type={passwordType}
                  text="Password"
                  onChange={handlePasswordInput}
                />
                <ShowButton
                  password={password}
                  onClick={handleShowBtnClick}
                  type="button"
                >
                  {passwordType === 'password' ? 'Show' : 'Hide'}
                </ShowButton>
              </PasswordContainer>
              <SignupButton type="submit" disabled={!valid}>
                Sign up
              </SignupButton>
              {showError && (
                <ErrorText>
                  This email/username isn&apos;t available. Please try another.
                </ErrorText>
              )}
              <AgreeText>
                By signing up, you agree to our Terms, Data Policy and Cookies
                Policy
              </AgreeText>
            </SignupForm>
          </FirstBox>

          <LoginBox>
            <LoginText>Have an account?</LoginText>
            <LoginButton onClick={handleLogin} type="button">
              Log in
            </LoginButton>
          </LoginBox>
          <AppText>Get the app.</AppText>
          <DownloadsContainer>
            <a
              href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadImg
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="Available on the App Store"
                style={{ marginRight: '8px' }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D08253BA2-FF09-408D-A06D-263941B4B428%26utm_content%3Dlo%26utm_medium%3Dbadge"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadImg
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="Available on Google Play"
              />
            </a>
          </DownloadsContainer>
        </MainContent>
      </MainContainer>

      <footer style={{ marginTop: 'auto' }}>
        <FooterContent>
          <LinksContainer>
            <LinksRow>
              <FooterLink link="https://about.instagram.com/" text="About" />
              <FooterLink
                link="https://about.instagram.com/blog/"
                text="Blog"
              />
              <FooterLink
                link="https://www.instagram.com/about/jobs/"
                text="Jobs"
              />
              <FooterLink link="https://help.instagram.com/" text="Help" />
              <FooterLink
                link="https://developers.facebook.com/docs/instagram"
                text="API"
              />
              <FooterLink
                link="https://www.instagram.com/legal/privacy/"
                text="Privacy"
              />
              <FooterLink
                link="https://www.instagram.com/legal/terms/"
                text="Terms"
              />
              <FooterLink
                link="https://www.instagram.com/directory/profiles/"
                text="Top Accounts"
              />
              <FooterLink
                link="https://www.instagram.com/directory/hashtags/"
                text="Hashtags"
              />
              <FooterLink
                link="https://www.instagram.com/explore/locations/"
                text="Locations"
              />
            </LinksRow>
          </LinksContainer>
          <InfoRow>
            <InfoText>English</InfoText>
            <InfoText style={{ marginLeft: '16px' }}>
              © 2021 Instagram from Facebook
            </InfoText>
          </InfoRow>
        </FooterContent>
      </footer>
    </Section>
  );
};

export default SignupPage;
