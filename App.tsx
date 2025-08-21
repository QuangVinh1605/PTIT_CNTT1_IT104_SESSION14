
import ClickExample from './Componets/ClickExample'
import Exercise01 from './Componets/Excercise01'
import GenderForm from './Componets/GenderForm'
import Notification from './Componets/Notification'
import ProductForm from './Componets/ProductForm'
import StudyMessage from './Componets/StudyMessage'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function App() {

  return (
    <>
      <div>
        <Exercise01></Exercise01>
        <Notification></Notification>
        <ClickExample></ClickExample>
        <StudyMessage></StudyMessage>
        <ProductForm></ProductForm>
        <GenderForm></GenderForm>
        <RegisterForm></RegisterForm>
        <LoginForm></LoginForm>
      </div>
      </>
  )
}

export default App
