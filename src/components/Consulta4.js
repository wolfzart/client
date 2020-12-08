import React,{Fragment ,useEffect,useState} from "react";

const ListTodos = () => {
    const [todos,setTodos] = useState("");
    const [gradoCurso,setGradoCurso]=useState("");
    const [letraCurso,setLetraCurso]=useState("");


    const getTodos=async(e) =>{
      e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/promedio/'+gradoCurso+'/'+letraCurso);
            
            const jsonData = await response.json();
            setTodos(jsonData);
           Window.location ="/";
           
           
        
       } catch (err) {

           console.error(err.message);
        }

    }; 
    useEffect(()=>{
        getTodos();

    },[]);
    console.log(todos);
    return (<Fragment>
      <body>
        <h1 class="text-center"> Promedio de un curso en específico</h1>
        <form class="form-inline" >


<div class="form-group mb-2">
  <label class="">Grado Curso</label>
  <input type="number" className="form-control"  value={gradoCurso} onChange={e=>setGradoCurso(e.target.value)}></input>
</div>
<div class="form-group mx-sm-3 mb-2">
  <label  class="">Letra Curso</label>
  <input type="text" className="form-control"  value={letraCurso} onChange ={e=>setLetraCurso(e.target.value)}></input>
</div>
{/*}
*/}<button type="submit" class="btn btn-primary mb-2" onClick={e=>getTodos(e)} >buscar mejor promedio</button>
</form>

        {" "}
        
        <table class="table mt-5 text-center "  >
            
    <thead>
      <tr>
        <th >Promedio</th>
      </tr>
    </thead>
    <tbody>
         
         <tr>
             <td>{todos}</td>
         </tr>
      
      
    </tbody>
  </table>
  </body>
  </Fragment>
    );
};
    export default ListTodos;