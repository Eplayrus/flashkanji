import type { Page } from "@playwright/test";

export interface NavigationMeasurement {
  timedOut?: boolean;
  paintMs: number;
  hashMs: number;
  shellMs: number;
  interactiveMs: number;
  maxTaskMs: number;
  renders: number;
  frames: number;
  requests: string[];
  calls: Record<string, number>;
  functions: Record<string, { count: number; ms: number }>;
  tasks: Array<{ start: number; ms: number }>;
}
export function performanceProgress(size?: "fresh" | "medium" | "power"): Record<string, unknown>;
export function installPerformanceProbe(progress: Record<string, unknown>): void;
export function measureHome(page: Page): Promise<NavigationMeasurement>;
