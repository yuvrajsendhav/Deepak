import { useLocation } from "react-router-dom";
export default function RagistrationDelete(){
    let value = useLocation();
    fetch(`http://127.0.0.1:5000/feed/${value.state}`,
    {
        method:'DELETE'
    })
    .then(()=>{alert('Deleted')})
    .then(()=>{window.location.href='/GData'})
    .catch(err=>{console.log(err)});
    
}