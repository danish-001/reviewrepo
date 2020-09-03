// connect

function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos.allIds }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}

// form
redux -
  form({
    form: 'Dashboard-form',
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
