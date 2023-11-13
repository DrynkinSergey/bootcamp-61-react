// імпортуємо 2 сущності.
// 1 - для створення апі, друга для базового url
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Створюємо апі - об'єкт з налаштуваннями
export const todoApi = createApi({
	// назва майбутнього редьюсера
	reducerPath: 'todoApi',
	refetchOnFocus: true,
	tagTypes: ['todos'],
	// базовий запит
	baseQuery: fetchBaseQuery({
		// ставимо baseUrl
		baseUrl: 'https://6549f1ede182221f8d52315d.mockapi.io/',
	}),
	// Оголошуємо набір ендпоінтів
	endpoints: builder => ({
		// getTodos як базовий запит за туду
		getTodos: builder.query({
			query: () => `todos`,
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, completed: !body.completed },
			}),
			invalidatesTags: ['todos'],
		}),
		updateName: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

// Генерується на основі endpoints хуки з тою самою назвою, лише додається префікс use та закінчення Query або Mutation
export const {
	useGetTodosQuery,
	useUpdateNameMutation,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleTodoMutation,
} = todoApi
