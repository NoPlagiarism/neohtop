export interface ProcessStatus {
  label: string;
  emoji: string;
  color: string;
}

export const statusMap: Record<string, ProcessStatus> = {
  "Running": {
    label: "Running",
    emoji: "🏃",
    color: "var(--green)",
  },
  "Sleeping": {
    label: "Sleeping",
    emoji: "😴",
    color: "var(--blue)",
  },
  "Idle": {
    label: "Idle",
    emoji: "⌛",
    color: "var(--overlay0)",
  },
  "Stopped": {
    label: "Stopped",
    emoji: "🛑",
    color: "var(--red)",
  },
  "Zombie": {
    label: "Zombie",
    emoji: "🧟",
    color: "var(--red)",
  },
  "Tracing": {
    label: "Tracing",
    emoji: "🔍",
    color: "var(--yellow)",
  },
  "Dead": {
    label: "Dead",
    emoji: "💀",
    color: "var(--red)",
  },
  "Wakekill": {
    label: "Wake Kill",
    emoji: "🔪",
    color: "var(--red)",
  },
  "Waking": {
    label: "Waking",
    emoji: "🔄",
    color: "var(--yellow)",
  },
  "Parked": {
    label: "Parked",
    emoji: "🫥",
    color: "var(--overlay0)",
    },
  "LockBlocked": {
    label: "Lock Blocked",
    emoji: "🔒",
    color: "var(--red)",
  },
  "UninterruptibleDiskSleep": {
    label: "Disk Sleep",
    emoji: "💤",
    color: "var(--overlay0)",
  },
  "Unknown": {
    label: "Unknown",
    emoji: "❓",
    color: "var(--overlay0)",
  },
};

export function formatStatus(status: string): string {
  // Log the incoming status for debugging
  console.log('Process status:', status);
  
  const processStatus = statusMap[status] || statusMap.Unknown;
  return `<span class="status-badge" style="--status-color: ${processStatus.color}">
    <span class="status-emoji">${processStatus.emoji}</span>
    ${processStatus.label}
  </span>`;
}

export function formatMemorySize(bytes: number): string {
  const gb = bytes / (1024 * 1024 * 1024);
  return `${gb.toFixed(1)} GB`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${days}d ${hours}h ${minutes}m`;
}

export function getUsageClass(percentage: number): string {
  if (percentage >= 90) return "critical";
  if (percentage >= 60) return "high";
  if (percentage >= 30) return "medium";
  return "low";
}