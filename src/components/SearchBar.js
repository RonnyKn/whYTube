import { IconButton, Paper, TextField } from "@mui/material"
import React from "react"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 7,
        boxShadow: "none",
        margin: "5px",
        padding: "5px",
      }}
    >
      <TextField
        variant="filled"
        type="text"
        className="search-bar"
        label="Search"
        onChange={() => {}}
        style={{ Width: "20rem", height: "3rem" }}
      />
      <IconButton
        aria-label="search"
        type="submit"
        style={{ padding: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
