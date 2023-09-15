import React from 'react';

function Form({input, setInput ,todos,setTodos}) {
    const onInputChange = (e) => {
        setInput(e.target.value);   
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{title:input, completed: false}]);
        setInput("");
    };


  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter a Todo...' className='task-input' value={input} required onChange={onInputChange} />
        <button className="button-add" type='submit'>Add</button>
    </form>
  )
}

export default Form