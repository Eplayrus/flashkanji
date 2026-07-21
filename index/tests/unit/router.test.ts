import { describe, expect, it, vi } from "vitest";
import { createRenderCoordinator, installHashRouter, parseHash } from "../../src/router";

describe("hash router", () => {
  it("uses the hash as the only selected route", () => {
    window.history.replaceState(null, "", "/textbooks/N5/#review");
    expect(parseHash(window.location.hash).route).toBe("review");
  });

  it("maps review and textbooks independently", () => {
    expect(parseHash("#review").route).toBe("review");
    expect(parseHash("#textbooks").route).toBe("textbooks");
  });

  it("aborts the old render during rapid navigation", () => {
    const coordinator = createRenderCoordinator();
    const textbooks = coordinator.begin("textbooks");
    const review = coordinator.begin("review");
    expect(textbooks.signal.aborted).toBe(true);
    expect(textbooks.isCurrent()).toBe(false);
    expect(review.isCurrent()).toBe(true);
  });

  it("installs exactly one removable hashchange listener", () => {
    const callback = vi.fn();
    const remove = installHashRouter(callback);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    remove();
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
