import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <p className="text-muted-foreground">{t("notfound.title")}</p>
        <Link
          to="/"
          className="inline-block text-xs tracking-[0.2em] uppercase text-ember hover:underline"
        >
          {t("notfound.home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
