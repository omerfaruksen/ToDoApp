import React, {useContext} from 'react'
import { FooterContext } from '../context/FooterContext'
import { ToDoContext } from '../context/ToDoContext'

function footer() {
    //context propları
    const {todoList, setTodoList} = useContext(ToDoContext)
    const { setFilter, todoLeft} = useContext(FooterContext)


    return (
        <div>
            {/*todolist boş mu ?*/ }
            {todoList.length > 0 ? (
                <div className="footer">
                    <div className="filter">
                        <small>
                            {todoLeft.length}
                            {todoLeft.length === 1 ? 'item' : 'items'} left
                        </small>
                    </div>
                    {/*filtereleme btn */}
                    <div className="btncontainer">
                        <button className='filter' onClick={() => setFilter('all')}>All</button>
                        <button className='filter' onClick={() => setFilter('active')}>Active</button>
                        <button className='filter' onClick={() => setFilter('complated')}>Complated</button>
                    </div>
                    <div>
                        <button className='filter' onClick={() => setTodoList([])}>Clear All</button>
                    </div>
                </div>
            ):(
                ''
            )}
        </div>
    )
}

export default footer
