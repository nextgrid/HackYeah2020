import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Zgłoszenia" subtitle="Tabela" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Dziki</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Zgłoszenie
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Zagrożenie
                  </th>
                  <th scope="col" className="border-0">
                    Koordynaty
                  </th>
                  <th scope="col" className="border-0">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#526322</td>
                  <td>W trakcie</td>
                  <td>Duże</td>
                  <td>21°50′E 51°13′N</td>
                  <td>28.11.2020</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>#625362</td>
                  <td>W trakcie</td>
                  <td>Średnie</td>
                  <td>19°56′E 50°04′N</td>
                  <td>28.11.2020</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>#763522</td>
                  <td>Potwierdzone</td>
                  <td>Duże</td>
                  <td>21°00′E 52°13′N</td>
                  <td>27.11.2020</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>#928362</td>
                  <td>Potwierdzone</td>
                  <td>Duże</td>
                  <td>20°00′E 51°13′N</td>
                  <td>26.11.2020</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default Tables;
