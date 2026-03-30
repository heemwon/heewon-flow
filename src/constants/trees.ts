export interface Tree {
  direction: string;
  size: "sm" | "md" | "lg" | "xl";
  className: string;
}

export const INTRO_TREE_DATA: Tree[] = [
  {
    direction: "left",
    size: "lg",
    className: "bottom-[50px] left-[6px] lg:left-[20px]",
  },
  {
    direction: "left",
    size: "sm",
    className: "bottom-[50px] left-[100px] lg:left-[180px]",
  },
  {
    direction: "left",
    size: "md",
    className: "bottom-[50px] left-[160px] lg:left-[280px]",
  },
  {
    direction: "right",
    size: "md",
    className: "right-[160px] bottom-[60px] lg:right-[320px]",
  },
  {
    direction: "right",
    size: "lg",
    className: "right-[60px] bottom-[40px] lg:right-[120px]",
  },
  {
    direction: "right",
    size: "sm",
    className: "right-[6px] bottom-[60px] lg:right-[20px] lg:bottom-[50px]",
  },
];

export const STACK_TREE_DATA: Tree[] = [
  {
    direction: "left",
    size: "sm",
    className: "left-[10vw] bottom-[60px]",
  },
  {
    direction: "right",
    size: "lg",
    className: "left-[50vw] bottom-[50px]",
  },

  {
    direction: "right",
    size: "md",
    className: "left-[80vw] bottom-[60px]",
  },
  {
    direction: "left",
    size: "sm",
    className: "left-[120vw] bottom-[50px]",
  },
  {
    direction: "right",
    size: "md",
    className: "left-[180vw] bottom-[60px]",
  },
];

export const PROJECT_TREE_DATA: Tree[] = [
  {
    direction: "left",
    size: "lg",
    className: "left-[0%] bottom-[120px]",
  },
  {
    direction: "right",
    size: "xl",
    className: "left-[10%] bottom-[120px]",
  },

  {
    direction: "right",
    size: "md",
    className: "left-[50%] bottom-[120px]",
  },
  {
    direction: "left",
    size: "lg",
    className: "right-[10%] bottom-[120px]",
  },
  {
    direction: "right",
    size: "sm",
    className: "right-[0] bottom-[120px]",
  },
];
