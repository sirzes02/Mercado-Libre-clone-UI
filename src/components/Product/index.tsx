import React, { FC } from "react";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";
import tShirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Share</a>
        <a href="#">Sell one like</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tShirtImage} />
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Warranty</h4>
    <div>
      <span>
        <p className="title">Guaranteed purchase with us</p>
        <p className="decription">
          Receive the product you are waiting for or we will refund your money
        </p>
      </span>
      <span>
        <p className="title">Seller Warranty</p>
        <p className="decription">See Warrantya</p>
      </span>
    </div>
    <a href="#">Know more about warranty</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Description</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
      velit eu eros bibendum lacinia. Sed sit amet enim et neque suscipit
      convallis vel ut ipsum. Vestibulum non quam non sem venenatis ultricies ac
      hendrerit nunc. Suspendisse nisl elit, placerat a luctus vehicula,
      pharetra ut nisi. Nullam pulvinar elit nibh, vel eleifend tortor suscipit
      a. Sed in tincidunt tortor, ac egestas nulla. Sed nisi nisl, tempus vitae
      leo a, gravida facilisis sem. Phasellus lobortis, neque non consequat
      consequat, ligula turpis vestibulum elit, a placerat quam mauris nec
      lorem. Sed eget tincidunt est. Aliquam erat volutpat.
      <br />
      <br />
      Item incluidos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
      velit eu eros bibendum lacinia. Sed sit amet enim et neque suscipit
      convallis vel ut ipsum. Vestibulum non quam non sem venenatis ultricies ac
      hendrerit nunc. Suspendisse nisl elit, placerat a luctus vehicula,
      pharetra ut nisi. Nullam pulvinar elit nibh, vel eleifend tortor suscipit
      a. Sed in tincidunt tortor, ac egestas nulla. Sed nisi nisl, tempus vitae
      leo a, gravida facilisis sem. Phasellus lobortis, neque non consequat
      consequat, ligula turpis vestibulum elit, a placerat quam mauris nec
      lorem. Sed eget tincidunt est. Aliquam erat volutpat.
    </p>
  </Description>
);

export default Product;
