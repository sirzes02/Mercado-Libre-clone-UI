import React, { FC } from "react";
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: FC = () => {
  return (
    <Container>
      <Title>Seller information</Title>
      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localization</p>
          <strong>Cali, Colombia</strong>
        </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Product sold in the las 4 month</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Sales the last 4 months</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>With us since 2012</span>
          </div>
        </ReputationRow>
      </ReputationCard>
      <More href="#">See more details of this seller</More>
    </Container>
  );
};

export default SellerInfo;
