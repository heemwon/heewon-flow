import clsx from "clsx";
import { MotionProps } from "framer-motion";

import { STACK_TREE_DATA } from "../../../../_constants/trees";
import Tree from "../../../../_components/Tree";

export default function Trees({ ...props }: MotionProps) {
  return (
    <>
      {STACK_TREE_DATA.map((tree, idx) => (
        <Tree
          key={`${tree.direction}-${idx}`}
          direction={tree.direction}
          size={tree.size}
          className={clsx("absolute", tree.className)}
          {...props}
        />
      ))}
    </>
  );
}
