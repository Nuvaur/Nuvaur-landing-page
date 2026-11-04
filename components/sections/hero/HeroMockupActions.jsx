import Button from "@/components/ui/Button";

const HeroMockupActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <Button variant="primary" size="md" className="w-full">
        Buy Gold
      </Button>
      <Button variant="outline" size="md" className="w-full">
        Sell Gold
      </Button>
    </div>
  );
};

export default HeroMockupActions;
