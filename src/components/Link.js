import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useMutation, gql } from '@apollo/client';
import '../styles/link.css'
const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: Int!) {
    createVote(linkId: $linkId) {
      user {
        id
        username
      }
      link {
        id
        name
      }
    }
  }
`;

const Link = (props) => {
  const { link } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id,
    },
  });

  return (/*
    <div className="container">
      <div className='post'>
        <div className="like-container">
          <span className="gray">{props.index + 1}.</span>
          {authToken && (
            <div
              className="ml1 gray f11"
              style={{ cursor: 'pointer' }}
              onClick={vote}
            >
              <div class="emoji">💖</div>
            </div>
          )}
        </div>
        <div className="post-container">
          <div class="post-info" >
            <div class="name">({link.name})</div>
            <div class="img-container"><img class="img" src={link.image} alt={link.name} /></div>
            <div class="description">{link.description}</div>
          </div>

        </div>
      </div>
      <div className="post-details">
        {link.votes.length} votes | by{' '}
        {link.postedBy ? link.postedBy.username : 'Unknown'}{' '}
      </div>
    </div>*/

    <div class='container'>
      <div class='post-details' id='details'>
        
          {link.votes.length} 💖 | by{' '}
          {link.postedBy ? link.postedBy.username : 'Unknown'}{' '}
      </div>
      <div class='post-container'>
        <div class='like'>
          <span>{props.index + 1}.</span>
          {authToken && (
            <div onClick={vote} class="emoji">💖</div>
          )}
        </div>
        <div class='post'>
          <div class='post-name'>
            {link.name}
          </div>
          <div class='post-img-container'>
            <img class="post-img" src={link.image} alt={link.name} />
          </div>
          <div class='post-description'>
            {link.description}
          </div>
        </div>
      </div>

    </div>

  );
};

export default Link;
