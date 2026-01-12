import { setPersonalInfo } from "../store/slices/personalInfoSlice";
import { setSummary } from "../store/slices/personalSummarySlice";
import { setEducation } from "../store/slices/educationSlice";
import { setExperiences } from "../store/slices/experienceSlice";
import { setProjects } from "../store/slices/projectSlice";
import { setSkills } from "../store/slices/techSkillsSlice";
import { setCertifications } from "../store/slices/certificationSlice";
import { setAccomplishments } from "../store/slices/acomplishmentSlice";

export const hydrateResume = (dispatch, data) => {
  dispatch(setPersonalInfo(data.personalInfo));
  dispatch(setSummary(data.personalSummary?.summary || ""));
  dispatch(setEducation({ education: data.education }));
  dispatch(setExperiences(data.experience));
  dispatch(setProjects(data.projects));

  dispatch(
    setSkills({
      programmingLanguages:
        data.techSkills?.programmingLanguages || [],
      databases:
        data.techSkills?.databases || [],
      frameworks:
        data.techSkills?.frameworks || [],
      developerTools:
        data.techSkills?.developerTools || [],
      cloudAndDevOps:
        data.techSkills?.cloudAndDevOps || [],
    })
  );

  dispatch(setCertifications(data.certifications));
  dispatch(setAccomplishments(data.accomplishments));
};
