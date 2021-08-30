/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.div`
  margin: 0 8px 12px;
`;

const Link = styled.a`
  color: #8e8e8e;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  margin: -2px 0 -3px;
  font-weight: 400;
`;

const FooterLink = (props) => {
  const { text, link } = props;
  return (
    <LinkContainer>
      <Link href={link} target="_blank">
        {text}
      </Link>
    </LinkContainer>
  );
};

export default FooterLink;
