import { useReducer } from "react"

function reducer(state,action){
    if(action.type === "incremented_age"){
        return {
            age: state.age + 1
        }
    }
    throw Error("Invalid Action")
}

function useReducer1() {
    const [state,dispatch] = useReducer(reducer, {age: 16})

  return (
    <div>
        <button onClick={() => {
            dispatch({
                type: "incremented_age",
            })
        }}
        className="bg-slate-100 hover:bg-slate-300 ease-out duration-300 py-1 px-3 border border-slate-200 rounded-md">Increment</button>
        <h1 className="text-3xl">Age: {state.age}</h1>
    </div>
  )
}

export default useReducer1