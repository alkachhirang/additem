import React from 'react';

const Todoitem = ({ todo, onDelete, onEdit }) => {
    return (
        <div className='d-flex bg_list justify-content-between align-items-center mt-4'>
            <div>
                <p className='pt-2 w-full'>{todo}</p>
            </div>
            <div className='d-flex gap-2'>
                <button className='bg-white text-black common_btn' onClick={onEdit}>Edit</button>
                <button className='bg-white text-black common_btn' onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Todoitem;
