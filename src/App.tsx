import { useEffect, useState } from 'react'
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
import { ExpenseList } from './expense-tracker/components/ExpenseList'
import { ExpenseFilter } from './expense-tracker/components/ExpenseFilter'
import { ExpenseForm } from './expense-tracker/components/ExpenseForm'
// import categories from './expense-tracker/categories.ts'
import { ProductList } from './components/ProductList/ProductList'
// import { AxiosError, CanceledError } from 'axios';
import LoadingIcon from './components/LoadingIcon'
import apiClient, { AxiosError, CanceledError } from './services/api-client'


interface User {
  name: string;
  id: number;
  email: string
}

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    // axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal}).then((res) => setUsers(res.data)).catch((err) => {if(err instanceof CanceledError)return;  setError(err.message)}) return ()=> controller.abort()

    const get = async () => {
      try {

        const res = await apiClient.get<User[]>('/users', { signal: controller.signal })
        console.log(res)

        setUsers(res.data)
        setIsLoading(false)

      } catch (error: any) {
        // console.log(error)

        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setIsLoading(false)
      }
    }
    get()
    return () => controller.abort();

  }, [])


  const addUser = async (user: User) => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: 'Kings', email: 'Ogbonnaya' };
    setUsers([...users, newUser])
    try {
      const res = await apiClient.post('/users', newUser)
      setUsers([res.data, ...users])
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers)
    }

  }

  const updateUser = async (user: User) => {
    const originalUsers = [...users]

    const updatedUser = { ...user, name: user.name, email: user.email + '!' };
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))

    try {
      const res = await apiClient.patch(`/users/${user.id}`, updatedUser);

      // setUsers([res.data, ...users])
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers)
    }
  }

  const deleteUser = async (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))
    // axios.delete('https://jsonplaceholder.typicode.com/umsers' + user.id)
    //   .catch(err => {
    //     setError((err as AxiosError).message);
    //     setUsers(originalUsers)
    //   })
    try {
      await apiClient.delete(`/users/${user.id}`)
    } catch (err) {
      setError((err as AxiosError).message)
      setUsers(originalUsers)
    }
  }

  // const [category, setCategory] = useState('') FOR uSEeffect

  // Expenses ........

  // const [selectedCategory, setSelectedCategory] = useState('')
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: 'aaa', amount: 110, category: 'Utilities' },
  //   { id: 2, description: 'bba4', amount: 120, category: 'Groceries' },
  //   { id: 3, description: 'aaa3', amount: 201, category: 'Entertainment' },
  //   { id: 4, description: 'aaa2', amount: 30, category: 'Utilities' },
  //   { id: 5, description: 'aaa1', amount: 40, category: 'Utilities' },

  // ])

  // const visibleExpense = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

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
    <>
      {/* <Form /> */}
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



      {/* <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      </div>


      <div className="mb-3">

        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} /> */}


      {/* // For PRODUCTLIST (USEEFFECT) //  */}
      {/* <div>
        <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="HouseHold">HouseHold</option>
        </select>
        <ProductList category={category} />
      </div> */}


      {/* <ul>
        {users.map((user) => {
          return (
            <>
              <li key={user.id}>{user.name}, &nbsp; {user.email}</li>

            </>
          )
        })}
      </ul> */}

      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <LoadingIcon type={'spinningBubbles'} color={'blue'} />}
      <button className="btn btn-primary mb-3" onClick={() => addUser}>Add</button>
      <ul className='list-group'>
        {users.map((user) => {
          return (
            <li key={user.id} className='list-group-item d-flex justify-content-between'>
              Name: {user.name}, &nbsp; email: {user.email}
              <div className=''>
                <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)} >Update</button>
                <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>

              </div>
            </li>
          )
        })}
      </ul>


    </>

  )
}

export default App
