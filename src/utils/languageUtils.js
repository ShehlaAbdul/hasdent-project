// Language utility functions for URL-based language switching

export const SUPPORTED_LANGUAGES = ["az", "en", "ru"];
export const DEFAULT_LANGUAGE = "az";

export const getLanguageFromPath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);

  // Remove all language segments from the beginning
  let cleanSegments = [...segments];
  while (
    cleanSegments.length > 0 &&
    SUPPORTED_LANGUAGES.includes(cleanSegments[0])
  ) {
    cleanSegments.shift();
  }

  // Get the first valid language segment (should be the first one)
  const firstSegment = segments[0];
  const language = SUPPORTED_LANGUAGES.includes(firstSegment)
    ? firstSegment
    : DEFAULT_LANGUAGE;

  return {
    language: language,
    pathWithoutLang:
      cleanSegments.length > 0 ? "/" + cleanSegments.join("/") : "/",
  };
};
export const addLanguageToPath = (path, language) => {
  if (language === DEFAULT_LANGUAGE) {
    return path;
  }

  // Handle empty or root path
  if (!path || path === "/") {
    return `/${language}`;
  }

  // Remove leading slash if exists, then add language prefix
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${language}/${cleanPath}`;
};

export const removeLanguageFromPath = (path) => {
  const { pathWithoutLang } = getLanguageFromPath(path);
  return pathWithoutLang;
};

export const getCurrentLanguage = (pathname) => {
  const { language } = getLanguageFromPath(pathname);
  return language;
};
