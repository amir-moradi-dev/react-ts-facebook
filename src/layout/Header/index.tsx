import classes from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import { Avatar, IconButton } from "@mui/material";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.nav__left}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/300px-Facebook_f_logo_%282021%29.svg.png"
              }
              alt={"facebook-logo"}
            />
            <div className={classes.nav__input}>
              <SearchIcon />
              <input type={"text"} />
            </div>
          </div>
          <div className={classes.nav__center}>
            <div className={classes.nav__option}>
              <HomeIcon fontSize={"large"} />
            </div>
            <div className={classes.nav__option}>
              <FlagIcon fontSize={"large"} />
            </div>
            <div className={classes.nav__option}>
              <SubscriptionsOutlinedIcon fontSize={"large"} />
            </div>
            <div className={classes.nav__option}>
              <StorefrontOutlinedIcon fontSize={"large"} />
            </div>
            <div className={classes.nav__option}>
              <SupervisedUserCircleIcon fontSize={"large"} />
            </div>
          </div>
          <div className={classes.nav__right}>
            <div className={classes.nav__info}>
              <Avatar />
              <h4>Mr. Amir Moradi</h4>
            </div>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
