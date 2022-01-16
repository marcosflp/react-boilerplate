import React from 'react';
import { gql, useQuery } from '@apollo/client';
import * as R from 'ramda';
import { Header, List } from 'semantic-ui-react';

import Container from './lib/ui/Container';

function Currencies() {
  const { data, loading } = useQuery(GET_RATES_QUERY);

  return (
    <Container>
      <Header>Currencies</Header>

      <List as="ol">
        {loading ? (
          'Loading'
        ) : (
          <>
            {R.map(
              (rate) => (
                <List.Item as="li" value="-" key={rate.currency}>
                  {rate.currency}
                </List.Item>
              ),
              data.rates,
            )}
          </>
        )}
      </List>
    </Container>
  );
}

const GET_RATES_QUERY = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

export default Currencies;
