import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import moment from 'moment'

import 'moment/locale/ro.js'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: 'en',

      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      debug: true,

      interpolation: {
        format: function (value, format, lng) {
          if (format === 'uppercase') return value.toUpperCase()
          if (format === 'intlDate') {
            if (value && moment(value).isValid()) {
              return moment(value).format('L')
            }
            return ''
          }

          if (format === 'intlLongDate') {
            if (value && moment(value).isValid()) {
              return moment(value).format('LLLL')
            }
            return ''
          }

          if (format === 'intlTimeFromX') {
            if (value && moment(value.start).isValid()) {
              let startDate = moment(value.start)
              let endDate = moment(value.end)
              return moment(endDate).from(startDate, true)
            }
            return ''
          }

          if (format === 'intlHoursFromX') {
            if (value && moment(value.start).isValid()) {
              let startDate = moment(value.start)
              let endDate = moment(value.end)
              let span = moment.duration(endDate - startDate)
              return `${parseInt(span.asHours(), 10)}h ${parseInt(span.asMinutes() % 60, 10)}m`
            }
            return ''
          }

          if (format === 'intlNumber') return new Intl.NumberFormat(lng).format(value)
          if (format === 'intlDecimal') return new Intl.NumberFormat(lng, { minimumFractionDigits: 2 }).format(value)
          if (format === 'intlDecimal2')
            return new Intl.NumberFormat(lng, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)

          //dateformat
          if (value && value.format) {
            if (value.value && moment(value).isValid()) {
              return moment(value.value).format(value.format)
            }
            return ''
          }

          return value
        }
      },

      react: {
        useSuspense: true,
        usePureComponent: true
      },

      backend: {
        loadPath: '/static/locales/{{lng}}/{{ns}}.json'
      }
    },
    () => {
      let currentLang = i18n.language
      if (!currentLang || !currentLang.startsWith('ro')) {
        i18n.changeLanguage('en')
      } else {
        i18n.changeLanguage('ro')
      }
    }
  )

i18n.on('languageChanged', function (lng) {
  moment.locale(lng)
})

export default i18n
