
function App() {
    const [sum, setSum] = React.useState(0)
    const [counters, setCounters] = React.useState([ 
        {id: 1, number: 0},
    ])


    const updateCounter = (id, num) => {
        console.log(id)
        let idx = counters.findIndex(el => el.id === id )
        console.log(idx)
        const newCounters = [...counters]
        if(counters[idx].number+num < 0) {return}
        newCounters[idx].number +=num

        setSum(prv => prv+num)
        
    } 

    const deleteCounter = (id,num) => {

         console.log(id)
        let index = counters.findIndex(el => el.id===id)
        console.log(index)
        const newDelete = [...counters]
        newDelete.splice(index,1)
        if(newDelete< 1) {return}
        setCounters(newDelete)

        setSum(prev => prev-num)
        
    }


    const addCounter = () =>{
        let newArray = [...counters]
        newArray.push( {id: counters[counters.length-1].id+1, number: 0}) 
        setCounters(newArray)
        console.log(newArray)
    }

    
    return (
        <div className='app'>
            <h1 className="show-sum">Sum = {sum} </h1>
            <button onClick={ () => addCounter()} className="btn-add">Add Counter</button>
            <hr />
            {counters.map (el => {
                return <Counter key= {el.id} 
                item={el} 
                updateCounter={updateCounter}
                deleteCounter={deleteCounter}
                />
            })}

        </div>
    )
}



function Counter(props) {
    const {item, updateCounter,deleteCounter} = props
    return (
            <div className="counter">
                <button  onClick= {() =>updateCounter(item.id,-1)}className="btn btn-dec">-</button>
                <h3 className="number">{item.number}</h3>
                <button onClick= {() =>updateCounter(item.id,+1)} className="btn btn-inc">+</button>
                <button onClick= {() =>updateCounter(item.id,-item.number)}className="btn btn-clr">C</button>
                <button onClick= {() =>deleteCounter(item.id,item.number)}className="btn btn-clr">X</button>
            </div>

    )
}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)