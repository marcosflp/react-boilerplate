import React from 'react';
import * as R from 'ramda';
import { Routes, Route, Link } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";

const Menu = () => (
    <>
        <Link to="/">Home page</Link><br/>
        <Link to="/about">About page</Link>
    </>
)

const Home = () => (
    <>
        <h2>Home page</h2>
        <Menu />
    </>
)

const About = () => {
    const { data, loading } = useQuery(GET_RATES_QUERY)

    console.log(data)

    return (
        <div>
            <h2>About page</h2>
            <Menu />

            <h3>Data</h3>
            <div>
                {loading ? ("Loading") : (
                    <>
                        {R.map((rate) => (
                            <div key={rate}>
                                {rate.currency}
                            </div>
                        ), data.rates)}
                    </>
                )}
            </div>
        </div>
    )
}

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>

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
`

export default App;
