export function BottomPanel({selectAll, setTodo}) {
    return (
        <div className='bottom-btns-container'>
            <button className='select-all-btn' onClick={selectAll}>select all</button>
            <button className='delete-all-btn' onClick={() => setTodo([])}>delete all</button>
        </div>
    )
}