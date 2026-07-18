export interface Star {
  top: string;
  left: string;
  size: "sm" | "md" | "lg";
  delay: number;
}

export const INTRO_STAR_DATA: Star[] = [
  { top: "10%", left: "20%", size: "sm", delay: 0.5 },
  { top: "15%", left: "70%", size: "md", delay: 1.2 },
  { top: "40%", left: "30%", size: "md", delay: 2.8 },
  { top: "50%", left: "85%", size: "lg", delay: 1.5 },
  { top: "40%", left: "45%", size: "lg", delay: 0.5 },
  { top: "50%", left: "20%", size: "md", delay: 1.5 },
  { top: "50%", left: "65%", size: "md", delay: 1 },
  { top: "30%", left: "75%", size: "sm", delay: 2 },
];

export const STACK_STAR_DATA: Star[] = [
  { top: "16%", left: "5%", size: "sm", delay: 0.5 },
  { top: "30%", left: "20%", size: "sm", delay: 1 },
  { top: "15%", left: "70%", size: "sm", delay: 1.2 },
  { top: "40%", left: "30%", size: "sm", delay: 2.8 },
  { top: "40%", left: "90%", size: "md", delay: 1.5 },
  { top: "25%", left: "45%", size: "md", delay: 0.5 },
  { top: "50%", left: "10%", size: "sm", delay: 1.5 },
  { top: "50%", left: "65%", size: "sm", delay: 1 },
  { top: "35%", left: "75%", size: "sm", delay: 2 },
];
