// звичайна функція, котра повертає частинку стейта
export const selectTodos = state => state.todoList.todos
export const selectLoading = state => state.todoList.loading
export const selectError = state => state.todoList.error
