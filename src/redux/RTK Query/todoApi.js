// імпортуємо 2 сущності.
// 1 - для створення апі, друга для базового url
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Створюємо апі - об'єкт з налаштуваннями
export const todoApi = createApi({
	// назва майбутнього редьюсера
	reducerPath: 'todoApi',
	// Треба для того, щоб зробити повторний запит в момент переходу з іншого вікна
	refetchOnFocus: true,
	// TagTypes служить для того, щоб об'явити набір тегів. За котрими слідкують ендпоінти
	tagTypes: ['todos'],
	// базовий запит
	baseQuery: fetchBaseQuery({
		// ставимо baseUrl
		baseUrl: 'https://dummyjson.com/',
	}),
	// Оголошуємо набір ендпоінтів
	endpoints: builder => ({
		// getTodos як базовий запит за туду
		getTodos: builder.query({
			query: limit => `todos?limit=${limit}`,
			providesTags: ['todos'],
		}),
		// Створюємо конфіг для метода POST , додаємо mutation
		addTodo: builder.mutation({
			// передаємо в колбек тіло запиту
			query: body => ({
				// Адреса, куди йде запит
				url: 'todos',
				// ОБОВ'ЯЗКОВО МАЄ БУТИ МЕТОД!!!!
				method: 'POST',
				// передаэмо тіло запиту
				body,
			}),
			// Вказуємо, що після запиту треба оновити наш список (зробити рефетч)
			invalidatesTags: ['todos'],
		}),

		deleteTodo: builder.mutation({
			query: id => ({
				// Передаємо айді для видалення
				url: `todos/${id}`,
				// ОБОВ'ЯЗКОВО МАЄ БУТИ МЕТОД!!!!
				method: 'DELETE',
			}),
			// Вказуємо, що після запиту треба оновити наш список (зробити рефетч)

			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				// ОБОВ'ЯЗКОВО МАЄ БУТИ МЕТОД!!!!
				method: 'PUT',
				// Логіка для метода PUT
				body: { ...body, completed: !body.completed },
			}),
			// Вказуємо, що після запиту треба оновити наш список (зробити рефетч)

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
