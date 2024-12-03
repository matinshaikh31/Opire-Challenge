import { DevCardProps } from "./components/DevCard";

export const sampleProfile: DevCardProps = {
  name: "Matin Shaikh",
  company: "xyz",
  role: "Software developer",
  startDate: "August 2023",
  avatarUrl:
    "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4405.jpg",
  stats: {
    issuesResolved: 10,
    moneyEarned: 10,
    challengesWon: 1,
    contributedRepos: 5,
  },
  socialLinks: [
    { platform: "github", url: "https://github.com/matinshaikh31" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/matin-shaikh-5a0639248/" },
    { platform: "x", url: "https://x.com/matinshaikh31" },
  ],
};
