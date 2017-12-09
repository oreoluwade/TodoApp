import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import styled from 'styled-components';

const PaddedCard = styled(Card)`
  margin-top: 5%;
  min-height: 150px;
`;

const CenteredCardText = styled(CardText)`
  text-align: center;
  font-weight: bold;
`;

const HomePage = () => (
  <PaddedCard>
    <CenteredCardText>
      Welcome! Here, you can create Todos and
      mark them as completed when you are done.
    </CenteredCardText>
  </PaddedCard>
);

export default HomePage;
