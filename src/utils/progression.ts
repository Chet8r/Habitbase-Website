export const LEVELS = [
  "Struggling",
  "Consistency",
  "Momentum",
  "Habit",
  "Mastery I",
  "Mastery II",
  "Mastery III",
  "Flow",
] as const;

export type Level = (typeof LEVELS)[number];
export type Difficulty = "simple" | "moderate" | "complex";

const BASE: Record<Difficulty, Record<Level, number>> = {
  simple:   { Struggling: 3, Consistency: 6,  Momentum: 16, Habit: 20, "Mastery I": 35,  "Mastery II": 45,  "Mastery III": 50,  Flow: 0 },
  moderate: { Struggling: 5, Consistency: 14, Momentum: 35, Habit: 40, "Mastery I": 70,  "Mastery II": 80,  "Mastery III": 80,  Flow: 0 },
  complex:  { Struggling: 8, Consistency: 22, Momentum: 50, Habit: 60, "Mastery I": 105, "Mastery II": 110, "Mastery III": 115, Flow: 0 },
};

export const LEVEL_COLOR: Record<Level, string> = {
  Struggling:    "#6b7280",
  Consistency:   "#f97316",
  Momentum:      "#3b82f6",
  Habit:         "#22c55e",
  "Mastery I":   "#94a3b8",
  "Mastery II":  "#64748b",
  "Mastery III": "#475569",
  Flow:          "#7c5cfc",
};

export const FREQ_SHORT: Record<number, string> = {
  1: "1×/wk", 2: "2×/wk", 3: "3×/wk", 4: "4×/wk", 5: "5×/wk", 6: "6×/wk", 7: "Daily",
};

function freqMult(f: number): number {
  return f / 7;
}

function scaledThresholds(diff: Difficulty, f: number): Record<Level, number> {
  const base = BASE[diff];
  const m = freqMult(f);
  const t = {} as Record<Level, number>;
  let runningBase = 0;
  let runningScaled = 0;

  for (const lv of LEVELS) {
    const v = base[lv];
    if (v === 0) { t[lv] = 0; continue; }
    if (m === 1) {
      t[lv] = v;
      runningScaled += t[lv];
      continue;
    }
    runningBase += v;
    const targetCumulative = Math.round(runningBase * m);
    t[lv] = Math.max(1, targetCumulative - runningScaled);
    runningScaled = targetCumulative;
  }

  let prev = 0;
  for (const lv of LEVELS) {
    if (t[lv] === 0) continue;
    t[lv] = Math.max(t[lv], prev + 1);
    prev = t[lv];
  }
  return t;
}

export interface LevelEntry {
  lv: Level;
  needed: number;
  enterAt: number;
  enterDay: number;
}

export interface Progression {
  diff: Difficulty;
  f: number;
  levels: LevelEntry[];
  totalChecks: number;
  totalDays: number;
}

export function progression(diff: Difficulty, f: number): Progression {
  const thresh = scaledThresholds(diff, f);
  const dpcheck = 7 / f;
  let cumulative = 0;

  const levels: LevelEntry[] = LEVELS.map((lv) => {
    const needed = thresh[lv];
    const enterAt = cumulative;
    const enterDay = Math.round(enterAt * dpcheck);
    if (needed > 0) cumulative += needed;
    return { lv, needed, enterAt, enterDay };
  });

  return {
    diff,
    f,
    levels,
    totalChecks: cumulative,
    totalDays: Math.round(cumulative * dpcheck),
  };
}

export function fmtDays(days: number): string {
  if (days === 0) return "Day 1";
  if (days < 7) return `${days}d`;
  if (days < 30) return `${(days / 7).toFixed(1).replace(/\.0$/, "")}w`;
  if (days < 365) return `${(days / 30.44).toFixed(1).replace(/\.0$/, "")}mo`;
  return `${(days / 365.25).toFixed(1).replace(/\.0$/, "")}yr`;
}
