import React,{Fragment ,useEffect,useState} from "react";

const ListTodos = () => {
    const [todos,setTodos] = useState([]);
    const [gradoCurso,setGradoCurso]=useState("");


    const getTodos=async(e) =>{
e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/promedio2/'+gradoCurso);
            
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
    return (<Fragment>
      <body>
        <h1 class="text-center">Alumno mejor promedio de la generación de un curso </h1>
        <form class="form-inline  " >


<div class="form-group ">
  <label class="">Grado Curso</label>
  <input type="number" className="form-control"  value={gradoCurso} onChange={e=>setGradoCurso(e.target.value)}></input>
</div>
<button type="submit" class="btn btn-primary mb-2" onClick={e=>getTodos(e)} > buscar mejor promedio</button>
</form>

        {" "}
        
        <table class="table text-center "  >
            
    <thead>
      <tr>
        <th >Promedio</th>
        <th>RUT</th>
      </tr>
    </thead>
    <tbody>
      
        {todos.map(todo =>(
          <tr>
             <td>{todo.promedio_general}</td>
    <td>{todo.rut_alumno}</td>
         </tr>
        ))}  
         
      
      
    </tbody>
  </table>
  </body>
  </Fragment>
    );
};
    export default ListTodos;