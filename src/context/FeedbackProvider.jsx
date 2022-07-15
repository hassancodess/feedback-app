import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackContext from './FeedbackContext'
import FeedbackData from '../data/FeedbackData'

const FeedbackProvider = ({ children }) => {
  // States
  const [items, setItems] = useState(FeedbackData)
  const [itemEdit, setItemEdit] = useState({ item: {}, edit: false })

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Add Item
  const addItem = (newItem) => {
    newItem.id = uuidv4()
    setItems([newItem, ...items])
  }

  // Calculating Average Rating
  let average =
    items.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / items.length
  average = average.toFixed(1)

  // Editing Item
  const editItem = (item) => {
    setItemEdit({ item, edit: true })
  }

  // Updating Item
  const updateItem = (id, updatedItem) => {
    setItems(
      items.map((item) => {
        return item.id === id ? { ...item, ...updatedItem } : item
      })
    )
    console.log(id, updatedItem)
  }

  // Export Values
  const values = {
    items,
    deleteItem,
    addItem,
    // average,
    itemEdit,
    editItem,
    updateItem,
  }
  return (
    <FeedbackContext.Provider value={values}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackProvider
