import { Box, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { fetchAPI } from "../utils/fetchAPI"
import Videos from "./Videos"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "100%" },
          borderRight: "2px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 RONS Media
        </Typography>
      </Box>
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
          {selectedCategory} <span style={{ color: "red" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
