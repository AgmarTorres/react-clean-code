import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from './../spinner/spinner'
import Context from '@/presetation/context/form/form-context'

const FormStatus = (): React.ReactElement<any, any> => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} />}
      { errorMessage && <span className={Styles.error} >  Erro</span>}
    </div>
  )
}

export default FormStatus
