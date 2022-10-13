import { Stack } from "@mui/material"
import React from "react"
import { categories } from "../utils/constant"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        color: "#fff",
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              marginRight: "10px",
              color: category.name === selectedCategory ? "white" : "#FC1503",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar
