import { randomUUID } from "crypto";
import Feature from "./Feature";

const Bathroom = () => {
  return (
    <Feature
      title="Bathroom"
      descriptions={[
        { id: randomUUID(), checked: false, text: "Step-free bathroom access" },
        {
          id: randomUUID(),
          checked: false,
          text: "Bathroom entrance wider than 32 inches",
        },
      ]}
    />
  );
};
export default Bathroom;
