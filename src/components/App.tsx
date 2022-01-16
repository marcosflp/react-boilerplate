import React from 'react';
import * as R from 'ramda';
import { Routes, Route, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const MenuItem = styled.button`
  margin-right: 1rem;
  appearance: none;
  backface-visibility: hidden;
  background-color: #2f80ed;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:hover {
    background-color: #1366d6;
    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
      rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  @media (min-width: 768px) {
    .button-65 {
      padding: 14px 22px;
      width: 176px;
    }
  }
`;

function Menu() {
  return (
    <>
      <Link to="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/about">
        <MenuItem>About</MenuItem>
      </Link>
    </>
  );
}

function Home() {
  return (
    <>
      <Wrapper>
        <Menu />
      </Wrapper>

      <Container>
        <Title>Home</Title>
      </Container>
    </>
  );
}

function About() {
  const { data, loading } = useQuery(GET_RATES_QUERY);

  return (
    <div>
      <Wrapper>
        <Menu />
      </Wrapper>

      <Container>
        <Title>About</Title>
        <div>
          {loading ? (
            'Loading'
          ) : (
            <>
              {R.map(
                (rate) => (
                  <div key={rate.currency}>{rate.currency}</div>
                ),
                data.rates,
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

const GET_RATES_QUERY = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

export default App;
