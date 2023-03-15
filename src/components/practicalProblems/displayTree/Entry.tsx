import "./entry.scss";
import { TEntry } from "./entryData";

interface Props extends TEntry {
  depth: number;

  activeChildren: Set<number>;
  toggleActiveChild: (id: number) => void;
}

export default function Entry({ id, name, children, depth, activeChildren, toggleActiveChild }: Props) {
  const LEFT_AT_EACH_DEPTH = 10; // px

  const showChildren = activeChildren.has(id);
  const className = children ? "parent" : "";

  return (
    <div>
      <button
        className={`unstyled-button ${className}`}
        style={{ paddingLeft: `${depth * LEFT_AT_EACH_DEPTH}px`, width: "fit-content" }}
        onClick={() => toggleActiveChild(id)}
      >
        {children ? " + " : null} {name}
      </button>
      {showChildren
        ? children?.map((child) => (
            <Entry {...child} key={child.id} depth={depth + 1} activeChildren={activeChildren} toggleActiveChild={toggleActiveChild} />
          ))
        : null}
    </div>
  );
}
