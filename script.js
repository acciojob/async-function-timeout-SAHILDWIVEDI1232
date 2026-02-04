	//your JS code here. If required.
	const value2 =document .getElementById("text");
	const value1=document.getElementById("delay");
	const button=document.getElementById("btn");
   const  ouput=document.getElementById("output");


	async function getData(){
	try{
		const text=value2.value;
		const delay = Number(value1.value);
		output.textContent = "";
		try {
    await wait(delay);
    output.textContent = text;
  } catch (error) {
    console.error(error);
	}}button.addEventListener("click", getData);