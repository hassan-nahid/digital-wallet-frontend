import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

const Settings = () => {

  const navigate = useNavigate()
  const handleReset = () => {
    localStorage.setItem("tour-last-step", "0");
    navigate("/admin/analaytics")
    window.location.reload();

  }


  return (
    <div>
      <div>
        <Button onClick={handleReset}>Restart Tour Guide</Button>
      </div>
    </div>
  )
}
export default Settings