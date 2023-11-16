import HeaderLayoutDefault from "./LayoutDefault";

const Header = ({ layout, transparent, invert, logoOnly, extraClass }) => {
  switch (layout) {
    case 1:
      return;

    case 2:
      return;

    default:
      return (
        <HeaderLayoutDefault
          transparent={transparent}
          invert={invert}
          logoOnly={logoOnly}
          extarClass={extraClass}
        />
      );
  }
};
export default Header;
