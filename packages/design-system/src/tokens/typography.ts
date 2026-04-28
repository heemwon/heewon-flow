export const typography = {
  fontFamily: {
    sans: ["Pretendard", "system-ui", "sans-serif"],
  },
  fontSize: {
    "heading-xl": ["32px", { lineHeight: "40px", fontWeight: "700" }],
    "heading-lg": ["24px", { lineHeight: "32px", fontWeight: "600" }],
    "heading-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
    "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
    "body-md": ["15px", { lineHeight: "22px", fontWeight: "400" }],
    "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
    "label-md": ["13px", { lineHeight: "18px", fontWeight: "500" }],
    "caption-xs": ["12px", { lineHeight: "16px", fontWeight: "400" }],
  },
} as const;
