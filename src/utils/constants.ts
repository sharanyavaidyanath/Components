import dexter from "../videos/DextersLab.mp4";
import tom from "../videos/Tomandjerry.mp4";
import noddy from "../videos/Noddy.mp4";
import powerpuff from "../videos/Powerpuff.mp4";

export const VIDEO_HIGHLIGHT_LIST = [
  { highlight: "Dexter's Laboratory", video: dexter },
  { highlight: "Tom and Jerry Kids", video: tom },
  { highlight: "Make way for Noddy", video: noddy },
  { highlight: "Powerpuff Girls", video: powerpuff },
];

export const PLANS_DATA = [
  {
    planName: "Solo",
    monthlyPrice: 45,
    yearlyPrice: 460,
    features: [
      "License for 1 device",
      "Windows, Linux, macOS",
      "All features",
      "All future updates",
      "Email support",
    ],
  },
  {
    planName: "Trio",
    monthlyPrice: 125,
    yearlyPrice: 1060,
    features: [
      "License for 3 devices",
      "Windows, Linux, macOS",
      "All features",
      "All future updates",
      "Email support",
      "License management",
    ],
  },
  {
    planName: "Team",
    monthlyPrice: 49,
    yearlyPrice: 500,
    features: [
      "Up to 10 devices",
      "Windows, Linux, macOS",
      "All features",
      "All future updates",
      "Email support",
      "License management",
      "Priority support",
      "Priority feature requests",
    ],
  },
];

export const PLAN_DURATIONS = {
  MONTHLY: "Monthly",
  YEARLY: "Annualy",
};

export const FONT_SIZES = {
  SMALLER: "12px",
  SMALL: "14px",
  NORMAL: "16px",
  BIG: "18px",
  BIGGER: "20px",
  BIGGEST: "24px",
  LARGE: "30px",
  LARGER: "36px",
  LARGEST: "48px",
  GREAT: "60px",
  GREATEST: "72px",
};
