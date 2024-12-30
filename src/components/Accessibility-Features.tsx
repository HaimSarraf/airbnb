import Bathroom from "./Bathroom";
import Bedroom from "./Bedroom";
import Guest from "./Guest";

const AccessibilityFeatures = () => {
  return (
    <div className="border-2 border-slate-400 p-4 my-5 rounded-md flex flex-col max-w-min">
      <header className="text-3xl mx-10 my-10">AccessibilityFeatures</header>
      <Guest />
      <Bedroom />
      <Bathroom />
    </div>
  );
};
export default AccessibilityFeatures;
