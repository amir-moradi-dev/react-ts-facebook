import classes from "./index.module.css";
import { Avatar, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type SidebarRowProps = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  src?: string;
};
function SidebarRow(props: SidebarRowProps) {
  const { title, Icon, src } = props;
  return (
    <>
      <div className={classes.sidebarRow}>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
      </div>
    </>
  );
}

export default SidebarRow;
