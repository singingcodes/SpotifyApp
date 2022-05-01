import MySideBar from "./MySideBar"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ArtistPage = () => {
  const params = useParams()
  const [artist, setArtist] = useState([])
  //   const [album, setAlbum] = useState([])
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          params.artistId
      )
      if (res.ok) {
        const artist = await res.json()

        setArtist(artist)
        console.log(artist)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <MySideBar />
      <div className="page-content" id="pageContent">
        <Container fluid id="container-fluid">
          <Container>
            <Row>
              <Col className="center-block col-sm-8 col-md-5 d-flex justify-content-center mt-4 mt-md-5 mx-auto">
                <p>{artist.nb_fan} MONTHLY LISTENERS</p>
              </Col>
            </Row>
            <Row>
              <Col className=" center-block col-md-6 col-md-5 d-flex justify-content-center mt-0 mx-auto">
                <h1>{artist.name}</h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <div className="col-7 d-none col-lg-5 col-xl-4 d-md-flex align-items-center mx-auto mt-4">
                <Button className="btn btn-success border border-success rounded-pill px-5">
                  PLAY
                </Button>
                <Button
                  id="follow"
                  className="btn btn-dark border border-light rounded-pill follow ml-3 px-5"
                >
                  FOLLOW
                </Button>
                <span>
                  <i className="bi bi-three-dots ml-3"></i>
                </span>
              </div>
            </Row>
            <Row>
              <Col className="col-sm-8 d-flex justify-content-center mx-auto mt-md-2">
                <span className="d-inline-block">
                  OV<span className="hover">ERVI</span>EW
                </span>
                <span className="d-inline-block ml-2 ml-md-4">
                  RELA<span>TED ART</span>ISTS
                </span>
                <span className="d-inline-block ml-2 ml-md-4">
                  A<span>BOU</span>T
                </span>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <h4 className="font-weight-bold">Albums</h4>
          <Row>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
              <a href="album.html">
                <img
                  className="img-fluid"
                  src={artist.picture_medium}
                  alt="artist"
                />
              </a>
              <div className="albumText">
                <p>
                  <b> Rhaposedy</b> (Sun comes up)
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default ArtistPage
