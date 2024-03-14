import Container from "react-bootstrap/Container";
export const ItenListConteiner = ({ greeting }) => (
  <Container className="saludo">
    <h1>{greeting}</h1>
  </Container>
);
