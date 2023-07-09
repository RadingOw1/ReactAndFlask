import React, { Suspense } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Table = styled.table`
    border: 1px solid #69c;
    border-collapse: separate;
    empty-cells: hide;
`;
const Th = styled.th`
    border: 2px solid #69c;
`;
const Td = styled.td`
    border: 1px solid #69c;
    padding: 1rem;
`;

const Tr = styled.tr`
  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
`;

const Tbody = styled.tbody`
  display:flex;
`;



const Second = () => {
    return (
        <Section>
            <Container>
            <Table>
                <Tbody>
                    <Tr>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    </Tr>
                    <Tr>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    <Td>ячейка</Td>
                    </Tr>
                </Tbody>
            </Table>

            </Container>
        </Section>
    );
};
    
export default Second;
    