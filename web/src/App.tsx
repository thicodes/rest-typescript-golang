import React from 'react';
import TodoList from './components/todo/TodoList';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #EDF2F7;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;

const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <TodoList />
      </Content>
    </>
  );
}

export default App;
