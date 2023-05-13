import { } from 'react-i18next';
import { withTranslation, WithTranslation } from 'react-i18next';

function App({ t, i18n }: WithTranslation) {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('fr')}>French</button>
      <button onClick={() => i18n.changeLanguage('de')}>German</button>

      {t("welcome")}
    </div>
  );
}

export default withTranslation()(App);
