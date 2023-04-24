import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import IFilm from '../model/Film';
import { imageList } from './utils/imageEntry';

const DisplayFilmInfo = ({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
}: IFilm) => {

  const [currentImage, setCurrentImage] = useState()

  useEffect(() => {
    setCurrentImage(imageList.find((image: any) => image.title === title)?.img);
  },[])

  return (
    <Container>
      <Row>
          <Col key={episode_id} className="text-center">
              <Image src={currentImage} alt={title} fluid />
          </Col>
          <Col>
              <Card>
                <Card.Header as="h5">{title}</Card.Header>
                <Card.Body>
                  <Card.Title>Episode {episode_id}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Directed by {director}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Produced by {producer}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Released on {release_date}
                  </Card.Subtitle>
                  <Card.Text>{opening_crawl}</Card.Text>
                </Card.Body>
              </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default DisplayFilmInfo;
