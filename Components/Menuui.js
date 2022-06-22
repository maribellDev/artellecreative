import * as React from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import style from "../styles/home.module.scss";
import Image from "next/image";
import Logo from "../public/logo/Logo-up.svg";
import styles from "../styles/navigation.module.scss";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Menuui() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button className={styles.logo}>
        <Link href={"/"}>
          <a>
            <span className={styles.logo1}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>
      </Button>
      <div className={styles.menubig}>
        <Button
          className={styles.but}
          id="services-button"
          aria-controls={open ? "services-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // endIcon={<KeyboardArrowDownIcon />}
        >
          <span>
            <a>Services</a>
          </span>
        </Button>
        <Menu
          id="services-menu"
          MenuListProps={{
            "aria-labelledby": "services-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Website Packages</MenuItem>
          <MenuItem onClick={handleClose}>Brand & Logo Design</MenuItem>
          <MenuItem onClick={handleClose}>New Business Packages</MenuItem>
          <MenuItem onClick={handleClose}>On going design</MenuItem>
          <MenuItem onClick={handleClose}>On going website support</MenuItem>
        </Menu>

        <Button
          className={styles.but}
          id="work-button"
          // aria-controls={open ? "work-menu" : undefined}
          // aria-haspopup="true"
          // aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          <Link href={"/work"}>
            <a>Work</a>
          </Link>
        </Button>
        {/* <Menu
          id="work-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "work-button",
          }} */}
        {/* >
          <MenuItem onClick={handleClose}>Website Packages</MenuItem>
          <MenuItem onClick={handleClose}>Brand & Logo Design</MenuItem>
        </Menu> */}
        <Button className={styles.but}>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </Button>
        <Button className={styles.but}>
          <Link href={"/pricing"}>
            <a>Pricing</a>
          </Link>
        </Button>

        <Button className={style.dark}>
          {" "}
          <Link href={"/contact"}>
            <a style={{ paddingRight: "0px", color: "white" }}>Get Started</a>
          </Link>
        </Button>
      </div>
    </>
  );
}
