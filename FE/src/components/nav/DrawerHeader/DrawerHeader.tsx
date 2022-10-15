/** @jsxImportSource @emotion/react */
import ChevronIcon from "./ChevronIcon";
import BurgerIcon from "./BurgerIcon";
import { css } from "@emotion/react";

const burgerChevronContainer = css({
  display: "flex",
  alignItems: "center",
});

const center = css({
  justifyContent: "center",
});

const end = css({
  justifyContent: "flex-end",
});

const DrawerHeader = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  return (
    <div css={[burgerChevronContainer, open ? end : center]}>
      {open ? (
        <ChevronIcon handleDrawerClose={handleDrawerClose} />
      ) : (
        <BurgerIcon handleDrawerOpen={handleDrawerOpen} open={open} />
      )}
    </div>
  );
};
export default DrawerHeader;
