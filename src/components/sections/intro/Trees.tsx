import clsx from "clsx";
import { INTRO_TREE_DATA } from "@/constants/trees";
import Tree from "@/components/common/Tree";

export default function Trees() {
  return (
    <>
      {INTRO_TREE_DATA.map((tree, idx) => (
        <Tree
          key={`${tree.direction}-${idx}`}
          direction={tree.direction}
          size={tree.size}
          className={clsx("absolute animate-floating", tree.className)}
        />
      ))}
    </>
  );
}
