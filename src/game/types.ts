export type GameState = {
    year: number;
    quarter: number;
    month: number;
    wallet: Currency;
    bank: Currency;
    children: Child[];
    advanceWorldTime: () => void;
    nextYear: () => void;
    earn: (amount: Currency) => void;
    spend: (amount: Currency) => boolean;
    deposit: (amount: Currency) => void;
    withdraw: (amount: Currency) => boolean;
    initFamily: () => void;
    addChild: (child: Child) => void;
    removeChild: (childId: Child["id"]) => void;
    pauseChildEducation: (childId: Child["id"]) => void;
    resumeChildEducation: (childId: Child["id"]) => void;
    setChildLaborProfession: (childId: Child["id"], laborProfession: Child["laborProfession"]) => void;
    resetAll: () => void;
};

export type Currency = {
  gold: number;   // whole gold
  silver: number; // 0..9 ideally (normalized)
};

type PersonStage = "child" | "adult_child";
export const GENDERS = ["male", "female"] as const;
export type Gender = typeof GENDERS[number];

export const PROFESSIONS = [
  "civil_engineer",
  "mechanical_engineer",
  "agricultural_engineer",
  "engineer",
  "doctor",
  "lawyer",
  "agriculturist",
  "financial_analyst"
] as const;

export type Profession = typeof PROFESSIONS[number];

export const LABOR_PROFESSIONS = [
  "employee",
  "laborer",
  "coop_employee"
] as const;

export type LaborProfession = typeof LABOR_PROFESSIONS[number];

export type Child = {
  id: string;
  name?: string;
  stage: PersonStage;
  gender: Gender;
  isStudying?: boolean;
  profession: Profession;
  laborProfession?: LaborProfession | null;
  
  maturity: TokenTrack;
  education?: TokenTrack | null;
};

export type TokenTrack = { timeTokens: number; timeTokensMax: number };
