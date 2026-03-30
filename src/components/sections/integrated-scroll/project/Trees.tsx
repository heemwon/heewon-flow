import clsx from "clsx";
import { MotionProps } from "framer-motion";
import { PROJECT_TREE_DATA } from "@/constants/trees";
import Tree from "@/components/common/Tree";

export default function Trees({ ...props }: MotionProps) {
  return (
    <>
      {PROJECT_TREE_DATA.map((tree, idx) => (
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
