import {useState, useRef} from "react";

function Square()
{
	const rNum=useRef();
	const [num,setNum]=useState("");
	const [msg,setMsg]=useState("");
	const hNum= (event)=> {
		setNum(event.target.value);
	}
	
	const find=(event)=>{
		event.preventDefault();
		if(num==="")
		{
			alert("Please enter number");
			setMsg("");
			rNum.current.focus();
			return;
		}
		let n=parseFloat(num);
		let r=n**2;
		let a="square"+r.toFixed(2);
		setMsg(a);
	}
	
	return(
		<>
		<center>
			<h1>Square finder App</h1>
			<form onSubmit={find}>
			<input type="number" step="any" placeholder="enter number" onChange={hNum} ref={rNum} />
			<br/> <br/>
			<input type="submit" value="Find Square" />
			</form>
			<h2>{msg}</h2>
		</center>
		</>
	);
		
}
export default Square;