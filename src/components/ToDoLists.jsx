const ToDoLists = ({ items }) => {
  return (
    <div className="list">
      <ul>s
        {items.map(item => <h1>{item.id}</h1>)}
      </ul>

      <div className="actions">
        <select>
          <option>Sort by order</option>
          <option>Sort by name</option>
          <option>Sort by finished status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  )
}

export default ToDoLists