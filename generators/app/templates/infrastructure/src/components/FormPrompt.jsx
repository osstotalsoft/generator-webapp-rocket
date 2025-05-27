import { useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useBlocker } from 'react-router'
import { useTranslation } from 'react-i18next'
import { equals } from 'ramda'

const usePrompt = onLocationChange => {
  const blocker = useBlocker(onLocationChange)
  const prevState = useRef(blocker.state)

  useEffect(() => {
    if (equals(blocker.state, 'blocked')) {
      blocker.reset()
    }
    prevState.current = blocker.state
  }, [blocker])
}

const FormPrompt = ({ hasUnsavedChanges }) => {
  const { t } = useTranslation()
  const onLocationChange = useCallback(() => {
    if (hasUnsavedChanges) {
      return !window.confirm(t('General.LeavingWithoutSaving'))
    }
    return false
  }, [hasUnsavedChanges, t])

  usePrompt(onLocationChange)
}

FormPrompt.propTypes = {
  hasUnsavedChanges: PropTypes.bool
}

export default FormPrompt
