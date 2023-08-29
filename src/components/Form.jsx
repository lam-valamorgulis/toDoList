const Form = () => {
  return (
    <form className="add-form">
      <h3>Add item: </h3>
      <input
        type="text"
        placeholder="Item..."
        value="test"
      />
      <button>Add</button>      
    </form>
  )
}

export default Form