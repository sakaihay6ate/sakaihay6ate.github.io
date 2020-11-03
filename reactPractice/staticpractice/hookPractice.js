// function hookPractice(){
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <p>you clicked {count} times.</p>
//             <button onclick={()=>{setCount(count+1)}}>click me</button>
//         </div>
//     )
// }
class HookPractice extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    setCount(i){
        this.setState({
            count:i
        })
    }
    render(){
        return(
            <div>
                <p>you clicked {this.state.count} times.</p>
                <button onclick={()=>{this.setCount(this.state.count+1)}}>click me</button>
            </div>
        )
    }
}
ReactDOM.render(
    <hookPractice />,
    document.getElementById('hookPractice')
  );