import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImgCarousel from './ImgCarousel';

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

const LoginPage = (props) => {
  console.log('login');

  return (
    <section>
      <main>
        <MainContent>
          <LeftContent>
            <ImgContainer>
              <ImgCarousel />
            </ImgContainer>
          </LeftContent>
        </MainContent>
      </main>
      <footer></footer>
    </section>
  );
};

export default LoginPage;
