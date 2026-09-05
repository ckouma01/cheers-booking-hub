import { useLanguage } from "@/i18n/LanguageContext";

const GreekFlag = () => (
  <svg viewBox="0 0 27 18" className="w-full h-full" aria-hidden="true">
    <rect width="27" height="18" fill="#0d5eaf" />
    <g fill="#fff">
      <rect y="2" width="27" height="2" />
      <rect y="6" width="27" height="2" />
      <rect y="10" width="27" height="2" />
      <rect y="14" width="27" height="2" />
    </g>
    <rect width="10" height="10" fill="#0d5eaf" />
    <g fill="#fff">
      <rect x="4" width="2" height="10" />
      <rect y="4" width="10" height="2" />
    </g>
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  const base =
    "w-7 h-5 overflow-hidden rounded-[2px] border transition-all duration-200";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => setLang("el")}
        aria-label={t("nav.lang.el")}
        title={t("nav.lang.el")}
        className={`${base} ${
          lang === "el"
            ? "border-ember opacity-100 scale-105"
            : "border-border opacity-45 hover:opacity-80"
        }`}
      >
        <GreekFlag />
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label={t("nav.lang.en")}
        title={t("nav.lang.en")}
        className={`${base} ${
          lang === "en"
            ? "border-ember opacity-100 scale-105"
            : "border-border opacity-45 hover:opacity-80"
        }`}
      >
        <UKFlag />
      </button>
    </div>
  );
};

export default LanguageToggle;
