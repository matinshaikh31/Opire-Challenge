import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Text } from "@mantine/core";

interface SocialIconProps {
  platform: "github" | "linkedin" | "x";
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
  switch (platform) {
    case "github":
      return <FaGithub className="icon" />;
    case "linkedin":
      return <FaLinkedin className="icon" />;
    case "x":
      return <FaSquareXTwitter className="icon" />;
    default:
      return null;
  }
};

interface ProfileStats {
  issuesResolved?: number;
  moneyEarned?: number;
  challengesWon?: number;
  contributedRepos?: number;
}

export interface DevCardProps {
  name?: string;
  company?: string;
  role?: string;
  startDate?: string;
  avatarUrl?: string;
  stats?: ProfileStats;
  socialLinks: {
    platform: "github" | "linkedin" | "x";
    url: string;
  }[];
}

const DevCard: React.FC<DevCardProps> = ({
  name,
  company,
  role,
  startDate,
  avatarUrl,
  stats,
  socialLinks,
}) => {
  const handleMouseMove = (e: {
    currentTarget: any;
    clientX: number;
    clientY: number;
  }) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    card.style.transform = `perspective(1500px) rotateX(${
      deltaY * 10
    }deg) rotateY(${deltaX * 10}deg)`;
  };

  const handleMouseLeave = (e: { currentTarget: any }) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1500px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      className="card-container card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glass Overlay */}
      <div className="glass-overlay"></div>

      {/* Content */}

      <div className="card-content">
        {/* Profile Text */}
        <div className="profile-text">
          <Text size="lg" className="text-cyan-400 profile-header">
            <img src={avatarUrl} alt="avatar" className="profile-img" />
            {name}
          </Text>
          <Text size="sm" color="dimmed">
            {role} @ {company}
          </Text>
          <Text size="xs" color="dimmed" style={{ marginTop: "0.25rem" }}>
            Data since {startDate}
          </Text>

          {/* Stats */}
          <div style={{ marginTop: "1.5rem" }}>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-2 pr-8">📦 Issues Resolved:</td>
                  <td className="text-right">{stats?.issuesResolved}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">💰 Money Earned:</td>
                  <td className="text-right">${stats?.moneyEarned}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">🏆 Challenges Won:</td>
                  <td className="text-right">{stats?.challengesWon}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">🔗 Contributed Repos:</td>
                  <td className="text-right">{stats?.contributedRepos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="socialwrapper">
          <div className="social-container">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
          <a
            href="https://app.opire.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            <img
              src="https://app.opire.dev/opire_logo.svg"
              alt="avatar"
              className="logo"
            />
          </a>
        </div>
      </div>

      {/* verticle line with dashed border */}
      <div className="vertical-line"></div>
    </div>
  );
};

export default DevCard;
