import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">Największe zagęszczenie</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        {/* Time Span */}
        <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Poprzedni tydzień</option>
            <option value="today">Dzisiaj</option>
            <option value="last-month">Ostatni miesiąc</option>
            <option value="last-year">Ostatni rok</option>
          </FormSelect>
        </Col>

        {/* View Full Report */}
        <Col className="text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Pełny raport &rarr;</a>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Top Referrals",
  referralData: [
    {
      title: "Warszawa",
      value: "19,291"
    },
    {
      title: "Kraków",
      value: "11,201"
    },
    {
      title: "Toruń",
      value: "9,291"
    },
    {
      title: "Katowice",
      value: "8,281"
    },
    {
      title: "Tychy",
      value: "7,128"
    },
    {
      title: "Poznań",
      value: "6,218"
    },
    {
      title: "Zakopane",
      value: "1,218"
    },
    {
      title: "Oświęcim",
      value: "1,171"
    }
  ]
};

export default TopReferrals;
