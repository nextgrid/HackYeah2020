import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Zgłoszenia</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          {/* <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div> */}

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              {" | "}
              {/* <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a> */}
              <span className="text-mutes">{discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Zatwierdzone
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Odrzucone
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  W trakcie
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            Zobacz więcej
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Discussions",
  discussions: [
    {
      id: 1,
      date: "dzisiaj",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "Wadowice",
        url: "#"
      },
      post: {
        title: "ilość: 2, zagrożenie: duże",
        url: "#"
      },
      body: "ilość: 2, zagrożenie: duże"
    },
    {
      id: 2,
      date: "2 dni temu",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "Kraków",
        url: "#"
      },
      post: {
        title: "ilość: 21, zagrożenie: małe",
        url: "#"
      },
      body: "ilość: 1, zagrożenie: małe"
    },
    {
      id: 3,
      date: "5 dni temu",
      author: {
        image: require("../../images/avatars/3.jpg"),
        name: "Szczecin",
        url: "#"
      },
      post: {
        title: "ilość: 4, zagrożenie: duże",
        url: "#"
      },
      body: "ilość: 4, zagrożenie: duże"
    }
  ]
};

export default Discussions;
