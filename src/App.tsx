import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { FormStep1 } from './pages/FormStep1'
import { FormStep2 } from './pages/FormStep2'
import { FormStep3 } from './pages/FormStep3'

import { Router } from './router'
import { FormProvider } from './contexts/formContext'
const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App