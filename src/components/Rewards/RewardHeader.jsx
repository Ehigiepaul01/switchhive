import { Title } from "@/components";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";

const RewardHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div>
        <Title>Reward System</Title>
      </div>
      <Button
        onClick={() => {
          navigate("/reward-system/exclude-product");
        }}
      >
        Exclude Product
      </Button>
    </div>
  )
}
export default RewardHeader


