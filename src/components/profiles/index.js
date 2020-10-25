import React from 'react';

import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function profileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.List = function profileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.User = function profileUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profile.Picture = function profilePicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  );
};

Profile.Name = function profileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
