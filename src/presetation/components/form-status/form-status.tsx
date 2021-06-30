import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from './../spinner/spinner'
import Context from '@/presetation/context/form/form-context'

const FormStatus = (): React.ReactElement<any, any> => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinner} />}
      { state.main && <span className={Styles.error} >{errorState.main}</span>}
    </div>
  )
}

export default FormStatus
