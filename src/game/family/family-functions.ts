import { Child, GENDERS, PROFESSIONS } from "@/game/types";
import { addTimeToken } from "../time/advance-time";
import { nearlyAdult } from "./utils/family-constants";

const makeId = () => crypto.randomUUID();

const createChild = (overrides?: Partial<Child>): Child => ({
  id: makeId(),
  stage: "child",
  gender: GENDERS[Math.floor(Math.random() * GENDERS.length)],
  profession: PROFESSIONS[Math.floor(Math.random() * PROFESSIONS.length)],
  laborProfession: null,
  maturity: nearlyAdult,
  education: null,
  isStudying: true,
  ...overrides,
});

/**
 * Ages children by 1 maturity tick (quarterly).
 * Pure function: no Zustand, no side-effects.
 */
function childrenAgeTicker(children: Child[]): Child[] {
  return children.map((child) => {
    if (child.stage !== "child") return child;

    const agedUpChild = addTimeToken(child.maturity, 1);
    const matured = agedUpChild.timeTokens >= agedUpChild.timeTokensMax;

    return {
      ...child,
      maturity: agedUpChild,
      stage: matured ? "adult_child" : "child",
    };
  });
}

function updateChildById(
  children: Child[],
  id: Child["id"],
  updater: (child: Child) => Child
): Child[] {
  return children.map((c) =>
    c.id === id ? updater(c) : c
  );
}

export {
  createChild,
  childrenAgeTicker,
  updateChildById,
}