import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { fetchAPI } from "../utils/fetchAPI"
import Videos from "./Videos"
import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <Box>
      <Typography
        className="feed"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          marginLeft: "2rem",
          fontSize: "2rem",
        }}
      >
        Search results for <span style={{ color: "red" }}> {searchTerm}</span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
