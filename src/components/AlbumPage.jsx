import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MySideBar from "./MySideBar"

const AlbumPage = () => {
  const params = useParams()
  const [albumList, setAlbumList] = useState([])
  const [album, setAlbum] = useState([])
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          params.albumId
      )
      if (res.ok) {
        const album = await res.json()
        console.log(album)
        console.log(album.artist.name)
        setAlbum(album)
        const albumArray = await album.tracks.data
        console.log(albumArray)
        setAlbumList(albumArray)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <MySideBar />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col className="col-lg-3 offset-lg-1 py-5">
              <div className="d-flex justify-content-center">
                <img
                  src={album.cover}
                  className="img-fluid shadow p-2 rounded"
                  alt="album-cover"
                />
              </div>
              <div className="album-label py-4">
                <h2 id="album-title">{album.title}</h2>
                <a
                  className="artist d-flex justify-content-center text-white-50"
                  href="3"
                >
                  {album.label}
                </a>

                <div className="d-flex justify-content-center py-3">
                  <Button type="button" className="play-btn btn btn-success">
                    PLAY
                  </Button>
                </div>
                <div className="d-flex justify-content-center">
                  <span className="label year text-white-50 px-1">
                    {album.release_date}
                  </span>
                  <span className="label text-white-50">
                    <i id="icons-small" className="bi bi-dot text-white-50"></i>
                  </span>
                  <span className="label text-nowrap text-white-50 px-1">
                    {album.nb_tracks} SONGS
                  </span>
                </div>
                <div className="d-flex justify-content-center py-4">
                  <i
                    id="icons-small"
                    className="like liked bi bi-heart pr-3"
                  ></i>

                  <i
                    id="icons-small"
                    className="threeDots bi bi-three-dots px-3 text-white-50"
                  ></i>
                </div>
              </div>
            </Col>
            <Col className="songs col-lg-8 py-2 py-lg-5">
              {albumList.map((song) => (
                <div
                  className="sgs row d-flex justify-content-center pb-3"
                  key={song.id}
                >
                  <p className="text-white-50">
                    <i id="icons-small" className="bi bi-music-note"></i>
                  </p>
                  <div className="col-9 text-white">
                    {song.title} <br />
                    <a
                      href="artistPlusSidebar.html"
                      className="artist text-white-50"
                    >
                      {song.artist.name}
                    </a>
                  </div>
                  <div className="col-2 text-white-50">
                    {("0" + Math.floor(song.duration / 60)).slice(-2)} :
                    {("0" + (song.duration % 60)).slice(-2)}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default AlbumPage
