import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Alert from './components/Alert'
import Button from './components/Button'
import ListGroup from "./components/ListGroup/ListGroup"
import produce from 'immer'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import Expandable from './components/Expendable/Expandable'
import Form from './components/Form/Form'


function App() {

  //UPDATING WITH Immer

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: 'Bug1', fixed: false },
  //   { id: 2, title: 'Bug2', fixed: false },

  // ])

  // const handleClickBug = () => {
  //   // console.log(bugs)
  //   // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
  //   // console.log(bugs)

  //   setBugs(produce(draft => {
  //     const bug = draft.find(bug => bug.id === 1);
  //     if (bug) bug.fixed = true
  //   }))
  // }


  /// Sharing Props

  // const [cartItem, setCartItem] = useState(['Product1', 'Product2'])

  // const items = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris'
  // ]
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  // const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      <Form />
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisible(false)}> My Alert</Alert>}
        <Button onClick={() => setAlertVisible(true)} color='secondary'>My Button </Button>
      </div>
      <div>
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'} </p>)}
        <button onClick={handleClickBug}> click Me</button>

      </div> */}


      {/* cartItems */}
      {/* <NavBar cartItemsCount={cartItem.length} />
      <Card cartItems={cartItem} onClear={() => setCartItem([])} />

      <div style={{ margin: '10px' }}>
        <Expandable maxChars={10}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fuga veniam voluptatem eveniet quaerat amet nobis omnis eos iusto. Illum accusamus animi sequi cupiditate deserunt suscipit est corporis corrupti nostrum reiciendis eaque, facere impedit nesciunt ratione repudiandae ea quibusdam enim? Doloremque totam maxime facilis adipisci minima mollitia tempora numquam laboriosam sequi? Unde tenetur delectus aspernatur sunt natus placeat, voluptatem veniam eaque eveniet alias minima voluptates possimus. Quos eos inventore nihil quam sed modi, cumque, magni laudantium laborum non enim, aut iste consequuntur? Veritatis iste assumenda animi nulla exercitationem voluptatibus repellendus quasi fugit necessitatibus id! Enim facere quaerat voluptatem dolor commodi.
        </Expandable>
      </div> */}



    </div>

  )
}

export default App
