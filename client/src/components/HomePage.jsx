import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { authActions } from '../../store/auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const LogoutButton = styled.button`
  margin-top: 10px;
  width: fit-content;
  padding: 10px;
  font-size: 20px;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  const { email, name, username, password } = user;

  const onClick = async (e) => {
    e.preventDefault();
    await axios.get('/api/users/logout');
    dispatch(authActions.logOut());
    history.push('/login');
  };

  return (
    <Container>
      <ul>
        <ListItem>email: {email}</ListItem>
        <ListItem>full name: {name}</ListItem>
        <ListItem>username: {username}</ListItem>
        <ListItem>password: {password}</ListItem>
      </ul>
      <LogoutButton onClick={onClick}>Sign Out</LogoutButton>
    </Container>
  );
};

export default HomePage;
