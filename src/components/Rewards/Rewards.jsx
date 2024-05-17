import RewardFilter from "./RewardFilter";
import RewardCards from "./RewardCards";

export default function Rewards() {
  return (
    <div className="flex justify-end">
      <RewardFilter />
      <RewardCards />
    </div>
  );
}
