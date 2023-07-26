import { useState, useEffect } from 'react'
import * as  FaIcons  from 'react-icons/fa'
import Header from './Header'
import AddItem from './AddItem'
import Footer from './Footer'

const List = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
    const [newItem, setnewItem] = useState('')

    useEffect(() => {
        localStorage.setItem('shoppinglist', JSON.stringify(items))
    }, [items])

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1 
        const myNewItem = { id, checked: false, item }
        const listItems = [...items, myNewItem];
        setItems(listItems)
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItem) return
        addItem(newItem)
        setnewItem('')
    }

  return (
    <section>
        <Header title='Shopping List' />
        <main> 
            <AddItem 
                newItem={newItem}
                setnewItem= {setnewItem}
                handleSubmit={handleSubmit}
            />
            <ul className='unordered-list'>
                { items.map((item) => (
                <li className='item' key={item.id} >
                    <input 
                        type='checkbox'
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={() => handleCheck(item.id)}
                    >
                    {item.item} </label>
                     <FaIcons.FaTrashAlt 
                        onClick={() => handleDelete(item.id)}
                        role='button'
                        tabIndex='0'
                     />
                </li> 
            ))}
            </ul>
        </main>
        <Footer />
    </section>
  )
}

export default List