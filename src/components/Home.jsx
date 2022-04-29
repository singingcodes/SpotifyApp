import MySideBar from "./MySideBar"
import { useEffect, useState } from "react"
import MyPlayer from "./MyPlayer"

const Home = () => {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      )
      if (res.ok) {
        const songs = await res.json()
        const songArray = await songs.data
        console.log(songArray)
        setSongs(songArray)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <MySideBar />
      <div className="page-content home-content" id="pageContent">
        <div className="top-menu d-flex pt-4 justify-content-center">
          <ul className="px-0">
            <li className="active mx-3">TRENDING</li>
            <li className="mx-3">PODCAST</li>
            <li className="mx-3">MOODS AND GENRES</li>
            <li className="mx-3">NEW RELEASES</li>
            <li className="mx-3">DISCOVER</li>
          </ul>
        </div>
        <div className="albums mt-5">
          <h2 className="mb-3 pl-5">#THROWBACKTHURSDAY</h2>
          <div
            className="album-cover d-flex px-3"
            style={{
              justifyContent: "flex-start",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          ></div>

          <div className="legends mt-5">
            <h2 className="mb-3 pl-5">Legends</h2>
            <div
              className="album-cover d-flex px-5"
              style={{
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {songs.map((song) => (
                <div
                  className="single-album col-12 col-sm-4 col-lg-2 py-2 py-md-1 px-1 d-flex"
                  key={song.id}
                  style={{
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    className="img-fluid"
                    src={song.album.cover_small}
                    alt="album"
                    style={{ width: "100%" }}
                  />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textDecoration: "none",
                      color: "white",
                      width: "100%",
                      marginTop: "5px",
                      fontWeight: "500",
                    }}
                  >
                    {song.artist.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MyPlayer />
    </>
  )
}
export default Home
