function hookPractice(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>you clicked {count} times.</p>
            <button onclick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}