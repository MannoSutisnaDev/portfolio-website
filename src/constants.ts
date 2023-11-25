import variables from "@/styles/variables.module.scss";
import { PageKeys } from "@/types";

export const PageBackgroundMapping: Record<PageKeys, string> = {
  [PageKeys.Home]: variables.homePageBackground,
  [PageKeys.Experience]: variables.experiencePageBackground,
  [PageKeys.Education]: variables.educationPageBackground,
  [PageKeys.Interests]: variables.interestsPageBackground,
  [PageKeys.Skills]: variables.skillsPageBackground,
};
