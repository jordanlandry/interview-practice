import React, { useState } from "react";
import Entry from "./Entry";
import entryData from "./entryData";

export function DisplayTreeSection() {
  const [activeChildren, setActiveChildren] = useState<Set<number>>(new Set());

  const toggleActiveChild = (id: number) => {
    setActiveChildren((prevChildren) => {
      const newChildren = new Set(prevChildren);
      if (newChildren.has(id)) newChildren.delete(id);
      else newChildren.add(id);

      return newChildren;
    });
  };

  return (
    <div>
      {entryData.map((entry) => (
        <Entry {...entry} key={entry.id} depth={0} activeChildren={activeChildren} toggleActiveChild={toggleActiveChild} />
      ))}
    </div>
  );
}
