/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ImgCarousel from './ImgCarousel';

// STYLED COMPONENTS
const MainContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 935px;
`;

const LeftContent = styled.div`
  position: relative;
  background-image: url(https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png);
  background-size: 454px 618px;
  height: 618px;
  width: 454px;
`;

const ImgContainer = styled.div`
  position: absolute;
  height: 427px;
  width: 240px;
  top: 99px;
  left: 151px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContent = styled(ColumnContainer)`
  margin-top: 30px;
  max-width: 350px;
`;

const LoginBox = styled(ColumnContainer)`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 40px;
`;

const Logo = styled.img`
  // width: 175px;
  // height: 51px;
  width: 200px;
  height: 70px;
  // margin: 22px auto 12px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled(TextField)`
  width: 258px !important;
  box-sizing: border-box;
  border: 1px solid rgb(219, 219, 219) !important;
  border-radius: 3px !important;
  margin-bottom: 6px !important;
  // padding: 27px 12px 10px !important;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const ShowButton = styled.button`
  visibility: ${(props) => (props.password.length > 0 ? 'visible' : 'hidden')};
  position: absolute;
  top: 17px;
  right: 1px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
`;

const LoginButton = styled.button`
  width: 258px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #0095f6;
  color: #fff;
  font-weight: bold;
  margin: 8px 0;
`;

// STYLED COMPONENTS END

const LoginPage = (props) => {
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [showButton, setShowButton] = useState(false);

  const handlePasswordInput = (e) => {
    const input = e.target.value;

    setPassword(input);

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

  return (
    <section>
      <main>
        <MainContent>
          <LeftContent>
            <ImgContainer>
              <ImgCarousel />
            </ImgContainer>
          </LeftContent>
          <RightContent>
            <LoginBox>
              <Logo src="logo.png" />
              <LoginForm>
                <TextInput
                  label="Phone number, username, or email"
                  placeholder="Phone number, username, or email"
                  variant="filled"
                  inputProps={{
                    style: {
                      backgroundColor: 'rgb(250, 250, 250)',
                      fontSize: '12px',
                      padding: '24px 8px 7px',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '12px',
                      color: 'rgba(0,0,0,0.54)',
                      marginLeft: '-4px',
                    },
                  }}
                  InputProps={{ disableUnderline: true }}
                />
                <PasswordContainer>
                  <TextInput
                    label="Password"
                    placeholder="Password"
                    variant="filled"
                    type={passwordType}
                    inputProps={{
                      style: {
                        backgroundColor: 'rgb(250, 250, 250)',
                        fontSize: '12px',
                        padding: '24px 8px 7px',
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: '12px',
                        color: 'rgba(0,0,0,0.54)',
                        marginLeft: '-4px',
                      },
                    }}
                    InputProps={{ disableUnderline: true }}
                    onChange={handlePasswordInput}
                  />
                  <ShowButton password={password} onClick={handleShowBtnClick}>
                    {passwordType === 'password' ? 'Show' : 'Hide'}
                  </ShowButton>
                </PasswordContainer>
                <LoginButton type="submit">Log In</LoginButton>
              </LoginForm>
            </LoginBox>
          </RightContent>
        </MainContent>
      </main>
      {/* <footer></footer> */}
    </section>
  );
};

export default LoginPage;
