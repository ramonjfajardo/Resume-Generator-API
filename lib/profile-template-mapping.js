// Profile to Template mapping
export const profileTemplateMapping = {
  RaMi: {
    resume: "Rafael_Miranda",
    template: "Resume-Tech-Teal",
    prompt: "default",
  },
  LuMo: {
    resume: "Lucas_Moura",
    template: "Resume-Modern-Green",
    prompt: "default",
  },
  LuPe: {
    resume: "Lucas_Peralta",
    template: "Resume-Creative-Burgundy",
    prompt: "default",
  },
  ToWo: {
    resume: "Tomasz_Wójcik",
    template: "Resume-Bold-Emerald",
    prompt: "default",
  },
  MaOl: {
    resume: "Magno_Oliveira",
    template: "Resume-Corporate-Slate",
    prompt: "default",
  },
  JaNo: {
    resume: "Jakub_Nowak",
    template: "Resume-Executive-Navy",
    prompt: "default",
  },
};

/**
 * Get profile configuration by slug
 */
export const getProfileBySlug = (slug) => profileTemplateMapping[slug] || null;

/**
 * Generic getter for profile properties
 */
const getProfileProperty = (slug, property, defaultValue = null) => {
  const config = getProfileBySlug(slug);
  return config?.[property] || defaultValue;
};

export const slugToProfileName = (slug) => getProfileProperty(slug, "resume");
export const getTemplateForProfile = (slug) =>
  getProfileProperty(slug, "template", "Resume");
export const getPromptForProfile = (slug) =>
  getProfileProperty(slug, "prompt", "default");
export const getAvailableSlugs = () => Object.keys(profileTemplateMapping);
export const getProfileById = (profileId) => getProfileBySlug(profileId);

export default profileTemplateMapping;
