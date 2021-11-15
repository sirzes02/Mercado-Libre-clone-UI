import React, { FC } from "react";
import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: FC = () => {
  return (
    <Container>
      <Condition>New</Condition>
      <Row>
        <h1>Unknown brand white t-shirt</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Shipped normally</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>in 3x the $ 11,67</InstallmentsInfo>
      </PriceCard>
      <StockStatus>Stock in availabiliy</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Free shipping</span>
          <span className="details">Benefits for buying this product</span>
          <a href="#" className="more">
            See more options
          </a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Buy Now</Button>
        <Button>Add to car</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Guaranteed purchase, received or product that is waiting for your
            money back
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
