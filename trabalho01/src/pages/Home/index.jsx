import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  background-color: #f5f5f5;
`;

const Logo = styled.img`
  width: 50px;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Feed = styled.div`
  padding: 20px;
  width: 100%;
`;

const Post = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const PostUser = styled.div`
  font-weight: bold;
`;

const PostText = styled.div`
  margin-top: 5px;
`;

function Home({ userName }) {
  const posts = [
    { id: 1, user: 'Usuario1', text: 'post teste' },
    { id: 2, user: 'Usuario2', text: 'post teste' },
    { id: 3, user: 'Usuario3', text: 'post teste' }
  ];

  return (
    <Container>
      <Header>
        <Logo src="/icone-xx.png" alt="Logo" />
        <UserName>{userName}</UserName>
      </Header>
      <Feed>
        {posts.map(post => (
          <Post key={post.id}>
            <PostUser>{post.user}</PostUser>
            <PostText>{post.text}</PostText>
          </Post>
        ))}
      </Feed>
    </Container>
  );
}

export default Home;
