import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";

const LanguageRedirect = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname);

    const handleLanguageChange = async () => {
      if (i18n.language !== currentLang) {
        try {
          await i18n.changeLanguage(currentLang);
        } catch (err) {
          console.error("Error changing language:", err);
        }
      }
    };

    if (i18n.isInitialized) {
      handleLanguageChange();
    } else {
      const checkReady = setInterval(() => {
        if (i18n.isInitialized) {
          handleLanguageChange();
          clearInterval(checkReady);
        }
      }, 100);

      return () => clearInterval(checkReady);
    }
  }, [location.pathname, i18n, navigate]);

  return children;
};

export default LanguageRedirect;
