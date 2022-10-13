import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constant"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "2px solid #3d3d3d",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#fff",
          fontFamily: "Dancing Script",
          fontSize: "1.5rem",
        }}
      >
        <img
          src={logo}
          alt="logo"
          height={50}
          style={{ marginRight: "1rem" }}
        />
        <h1>
          whY
          <span style={{ color: "red" }}>Tube</span>
        </h1>
      </Link>
      <SearchBar />
    </Stack>
  )
}
export default Navbar
