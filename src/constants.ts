import variables from "@/styles/variables.module.scss";
import { PageKeys } from "@/types";

export const PageBackgroundMapping: Record<PageKeys, string> = {
  [PageKeys.Home]: variables.homePageBackground,
  [PageKeys.Experience]: variables.experiencePageBackground,
  [PageKeys.Education]: variables.educationPageBackground,
  [PageKeys.Projects]: variables.projectsPageBackground,
  [PageKeys.Skills]: variables.skillsPageBackground,
  [PageKeys.AbountMe]: variables.aboutMeBackground,
};
