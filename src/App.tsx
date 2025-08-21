import { Outlet } from "react-router"
import CommonLayouts from "./components/Layouts/CommonLayout"

const App = () => {
  return (
    <CommonLayouts>
      <div className="container mx-auto px-4 md:px-6">
        <Outlet />
      </div>
    </CommonLayouts>
  )
}
export default App