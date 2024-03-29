import "./translations/i18n";
import { useTranslation } from "react-i18next";

const App = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      {t("welcome")}
      <p>HELLO</p>
      <p>Testons les traductions</p>
    </div>
  );
};

export default App;
