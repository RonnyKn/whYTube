import { IconButton, Paper, TextField } from "@mui/material"
import React, { useState } from "react"
import { Search } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const onChangeSearch = (e) => {
    const data = e.target.value
    setSearch(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    if (search) {
      navigate(`/search/${search}`)
      setSearch("")
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        onChange={(e) => onChangeSearch(e)}
        style={{ Width: "20rem", height: "3rem" }}
        required
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
