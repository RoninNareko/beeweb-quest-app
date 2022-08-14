import { Badge } from "antd";

const Header = ({ count, backgroundColor }) => (
  <header
    style={{
      marginBottom: "10px",
    }}
  >
    <Badge
      style={{
        backgroundColor,
        color: "rgb(64, 44, 27)",
        fontSize: "14px",
      }}
      count={count}
    />
  </header>
);

export default Header;
