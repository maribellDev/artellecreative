import styles from "../styles/navadapt.module.scss";
import style from "../styles/navigation.module.scss";
import Link from "next/link";
import Logo from "../public/logo/Logo-up.svg";
import Image from "next/image";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function Navadapt() {
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
      <header className={styles.header}>
        <Link href={"/"}>
          <a>
            <span className={styles.logo}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} forhtml={styles.menuBtn}>
          <span className={styles.navicon}></span>
        </label>
        <ul className={styles.menu}>
          <li>
            <Button
              className={style.navLi}
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
          </li>
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

          <li className={styles.navLi}>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Button className={style.but}>
              <Link href={"/about"}>
                <a>About</a>
              </Link>
            </Button>
          </li>
          <li className={styles.navLi}>
            <Button className={style.but}>
              <Link href={"/pricing"}>
                <a>Pricing</a>
              </Link>
            </Button>
          </li>
          <li>
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
          </li>
          <li className={styles.navLi}>
            <Button className={style.dark}>
              {" "}
              <Link href={"/contact"}>
                <a style={{ paddingRight: "0px", color: "white" }}>
                  Get Started
                </a>
              </Link>
            </Button>
            ;
          </li>
        </ul>
      </header>
    </>
  );
}
