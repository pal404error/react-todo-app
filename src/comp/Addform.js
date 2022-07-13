import React, { useState } from 'react';

export const Addform = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Desc cannot be empty")
    }else{
    props.addTodo(title,desc)
    setTitle("");
    setDesc("");
    }
}


  return(
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">

            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p className="font-medium text-blue-500 uppercase">Simple React app</p>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    Try it out &#x21e8;
                </h2>
                <p className="text-xl text-gray-600 md:pr-16">Add, Delete and Store Todos and listing in order. Storing on local storage helps to restore todos </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center">Add Todo</h3>
                    <form onSubmit={submit}>
                    <input type="text" id="title" onChange={(e) => { setTitle(e.target.value) }} value={title }  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Title"/>
                    <input type="text" value={desc} id="desc" onChange={(e) => { setDesc(e.target.value) }}  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Description"/>
                    
                    <div className="block">
                        <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Add</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}
