import React, { useState } from 'react';
import Todoitem from './Todoitem';
import { Container } from 'react-bootstrap';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);  // Track the index of the todo being edited
    const [errorMessage, setErrorMessage] = useState('');    // State for error message

    // Add or Save Todo
    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            setErrorMessage('Input cannot be empty');        // Set error if input is empty
            return;
        }

        if (editingIndex !== null) {
            // If we are editing, update the existing todo
            const updatedTodos = [...todos];
            updatedTodos[editingIndex] = inputValue;
            setTodos(updatedTodos);
            setEditingIndex(null);  // Reset the editing index after saving
        } else {
            // If not editing, add a new todo
            setTodos([...todos, inputValue]);
        }

        setInputValue('');  // Clear input after adding or editing
        setErrorMessage(''); 
    };

    // Delete Todo
    const handleDeleteTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // Edit Todo: Populate the input with the todo and set the inde
    const handleEditTodo = index => {
        setInputValue(todos[index]);  // Set the input value to the selected todo
        setEditingIndex(index);       // Track which todo is being edited
    };
    
    return (
        <div className='mt-5'>
        <Container className='mx-auto'>
                <h1 className='mb-5 text-center'>Add-items-list</h1>
                <div className='d-flex gap-3 flex-column mb-[12px]'>
                    <input
                        className='w-100 p-3 font-normal'
                        type="text"
                        placeholder='add-items'
                        value={inputValue}
                        onChange={e => {
                            setInputValue(e.target.value);
                            setErrorMessage('');  // Clear error on typing
                        }}
                    />
                    {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                    <button className='bg-black text-white common_btn' onClick={handleAddTodo}>
                        {editingIndex !== null ? 'Save' : 'Add'}
                    </button>
                </div>
                <ul className='p-0'>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <Todoitem
                                todo={todo}
                                onDelete={() => handleDeleteTodo(index)}
                                onEdit={() => handleEditTodo(index)}  // Trigger the edit
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default Todo;
