import { Outlet } from "react-router";
import CommonLayouts from "./components/Layouts/CommonLayout";

const App = () => {
  return (
    <CommonLayouts>
      <Outlet />
    </CommonLayouts>
  );
};

export default App;