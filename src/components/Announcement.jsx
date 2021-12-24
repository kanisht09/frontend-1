import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bolder;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
