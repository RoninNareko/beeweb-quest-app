import { Badge } from "antd";

const Header = ({ count }) => (
  <header
    style={{
      marginBottom: "10px",
    }}
  >
    <Badge count={count} />
  </header>
);

export default Header;
