
# Listly

A simple and interactive Todo application built using React. This app allows users to create, edit, and delete tasks. It provides a clean interface to manage personal tasks effectively.

## Features

- Add, Edit, and Delete tasks
- Mark tasks as completed or pending
- Filter tasks by status (All, Active, Completed)
- Persistent state (tasks remain on refresh using local storage)

## Technologies Used

- React
- JavaScript (ES6)
- CSS (or a CSS framework like Tailwind or Bootstrap)
- Local Storage for persistent state

## Installation

To get started with the Todo app, follow the steps below:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

   This will run the app in development mode. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

- **Add a Task:** Type in the input field and click "Add Task" or press Enter to create a new task.
- **Mark a Task as Completed:** Click the checkbox next to a task to mark it as completed.
- **Delete a Task:** Click the "Delete" button to remove a task.
- **Filter Tasks:** Use the filter options at the top to view All, Active, or Completed tasks.

## Folder Structure

```plaintext
public/
  index.html
src/
  assets/       # Optional: Store images, icons, etc.
  components/   # React components (TodoItem, TodoList, etc.)
  App.js        # Main component
  index.js      # Entry point for React
  styles.css    # Optional: App styling
```

## Contributing

If you'd like to contribute to the Todo app, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   
   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature-name"
   ```

4. Push to your fork:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request to the main repository.

## License

This project is licensed under the MIT License.
