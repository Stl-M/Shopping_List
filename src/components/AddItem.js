const AddItem = ({ newItem, setnewItem, handleSubmit  }) => {

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem"> Add Item</label>
        <input 
            type='text'
            required
            autoFocus
            placeholder='Add Item...'
            autoComplete='off'
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
        />
    </form>
  )
}

export default AddItem