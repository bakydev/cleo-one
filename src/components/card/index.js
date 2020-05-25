import React from 'react';
import { StyledCard, LeftSide, RightSide } from './styled';

const Card = ({
  name,
  login,
  location,
  company,
  avatar_url,
  bio,
  public_repos
}) => {
  return (
    <StyledCard to={`/users/${login}`}>
      <LeftSide>
        <img src={avatar_url} alt={name || login} />
      </LeftSide>
      <RightSide>
        {name && (
          <div>
            <strong>Name:</strong> {name || login}
          </div>
        )}
        {bio && (
          <div>
            <strong>Bio:</strong> {bio}
          </div>
        )}
        {company && (
          <div>
            <strong>Company:</strong> {company}
          </div>
        )}
        {location && (
          <div>
            <strong>Location:</strong> {location}
          </div>
        )}
        {public_repos && (
          <div>
            <strong>Public repos:</strong> {public_repos}
          </div>
        )}
      </RightSide>
    </StyledCard>
  );
};

export default Card;
