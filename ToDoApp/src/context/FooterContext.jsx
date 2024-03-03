import React, {createContext, useContext, useState} from "react";
import {ToDoContext} from './ToDoContext';

export const FooterContext= createContext()
export const FooterProvider = ({children}) => {
    //Diğer contexten liste aktarımı
    const {todoList} = useContext (ToDoContext)
    //States
    const [filter, setFilter] = useState('all')
    //Kalan todo sayısını bulma
    const todoLeft= todoList.filter((todo)=>!todo.isCompleted)
    //Filtreleme işlemi
    let filtered=todoList
    if(filter !== 'all'){
        filtered=todoList.filter((todo) =>
        filter === 'active' ? !todo.isCompleted && todo : todo.isCompleted && todo)
    }
    //Context propsları
    const values= {
        todoLeft,
        setFilter,
        filtered,
    }
    return(
        <FooterContext.Provider value= {values}>{children}</FooterContext.Provider>
    )
}