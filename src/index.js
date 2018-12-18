import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Firebase, { FirebaseContext } from './components/firebase'
import { I18nProvider } from '@lingui/react'
// import * as serviceWorker from './serviceWorker';

import ptCatalog from './locales/pt/messages.js'

const catalogs = {
  pt: ptCatalog
}

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <I18nProvider language="en" catalogs={catalogs}>
      <App />
    </I18nProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
