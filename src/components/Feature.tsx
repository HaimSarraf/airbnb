"use client";

import { UUID } from "crypto";
import { useState } from "react";

type Description = {
  id: UUID;
  text: string;
  checked: boolean;
};

type FeatureProps = {
  title: string;
  descriptions: Description[];
};

const Feature = ({ title, descriptions }: FeatureProps) => {
  const [checked, setChecked] = useState<boolean>();

  return (
    <div className="">
      <header className="text-2xl">{title}</header>
      {descriptions.map((description) => (
        <div key={description.id} className="py-4 px-2">
          <input
            id={description.id}
            type="checkbox"
            name={description.text}
            className={checked ? "font-bold" : ""}
            style={{scale:'2' , marginRight:'10px'}}
            onClick={() => {
              setChecked((prev) => !prev);
              description.checked = !description.checked;
              console.log(description.text);
            }}
          />
          <label
            htmlFor={description.id}
            className={description.checked ? "italic mx-2" : "mx-2"}
          >
            {description.text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Feature;
