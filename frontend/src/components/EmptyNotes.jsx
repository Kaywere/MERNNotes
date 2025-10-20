import { NotebookIcon,PlusIcon } from 'lucide-react'
import React from 'react'

const EmptyNotes = ({onCreateClick}) => {
  return (
    <div className="flex justify-center items-center mt-10">
        <div className='flex flex-col justify-center items-center py-25 px-25    '> 
        <NotebookIcon className='size-25 text-primary mb-5 bg-base-300/50 p-3 rounded-4xl'/>
        <h1 className='mb-5 text-2xl font-bold '>No Notes Yet 🤔 </h1>
        <p className='mb-5 text-xl  text-gray-500 '>Feel free to add more notes</p>
            <button className='btn btn-primary text-xl' onClick={onCreateClick}>
              <span>Create a New Note!</span>
            </button>
        </div>
    </div>
  )
}

export default EmptyNotes