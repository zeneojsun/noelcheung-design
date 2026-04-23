import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CVContact {
  phone: string;
  email: string;
  location: string;
  availability: string;
}

export interface CVHighlight {
  metric: string;
  label: string;
  detail: string;
}

export interface CVEngagement {
  client: string;
  work: string;
}

export interface CVExperience {
  role: string;
  company: string;
  subtitle?: string;
  period: string;
  current?: boolean;
  bullets?: string[];
  engagements?: CVEngagement[];
  recognition?: string;
}

export interface CVEarlyCareer {
  role: string;
  company: string;
  period: string;
  note: string;
}

export interface CVEducation {
  program: string;
  institution: string;
  year: number;
}

export interface CVTools {
  product_design: string[];
  design_systems: string[];
  engineering: string[];
  ai_workflow: string;
}

export interface CV {
  name: string;
  tagline: string;
  contact: CVContact;
  credentials: string[];
  profile: string;
  expertise: string[];
  highlights: CVHighlight[];
  experience: CVExperience[];
  early_career: CVEarlyCareer[];
  education: CVEducation[];
  tools: CVTools;
  languages: string[];
}

function loadCV(): CV {
  const filePath = path.join(process.cwd(), "content", "cv.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return data as CV;
}

export const cv = loadCV();
