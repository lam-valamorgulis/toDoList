import './App.css'
import { Logo, Form, ToDoLists, Stat } from './components'


export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <ToDoLists />
      <Stat />
    </div>
  )
}
