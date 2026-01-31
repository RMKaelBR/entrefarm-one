import { Child } from "../types";

export function pauseChildEducation(child: Child): Child {
  if (child.stage !== "adult_child") return child;
  return {
    ...child,
    isStudying: false,
  };
}

export function resumeChildEducation(child: Child): Child {
  if (child.stage !== "adult_child") return child;
  return {
    ...child,
    isStudying: true,
  };
}

export function setChildLaborProfession(
  child: Child,
  laborProfession: Child["laborProfession"]
): Child {
  if (child.stage !== "adult_child") return child;
  return {
    ...child,
    laborProfession,
  };
}