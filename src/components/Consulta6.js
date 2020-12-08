import React,{Fragment ,useEffect,useState} from "react";

const ListTodos = () => {
    const [todos,setTodos] = useState([]);
    const [rut_alumno,setRut_alumno]=useState("");


    const getTodos=async(e) =>{
e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/horario/'+rut_alumno);
            
            const jsonData = await response.json();
            setTodos(jsonData);
           Window.location ="/";
           
       } catch (err) {

           console.error(err.message);
        }
console.log(todos);
    };
    useEffect(()=>{
        getTodos();

    },[]);
    return (<Fragment>
        <body>
            <h1 class="text-Center">Horario de un alumno</h1>
        <form class="form-inline" >


<div class="form-group mb-2">
  <label class="sr-only">Grado Curso</label>
  <input type="text" className="form-control"  value={rut_alumno} onChange={e=>setRut_alumno(e.target.value)}></input>
</div>
<button type="submit" class="btn btn-primary mb-2" onClick={e=>getTodos(e)} > Rut Alumno</button>
</form>

        {" "}
        
        <table class="table mt-5 text-center "  >
            
    <thead>
      <tr>
        <th >Nombre Asignatura</th>
        <th>Horario</th>
        <th>Dia</th>
      </tr>
    </thead>
    <tbody>
      
        {todos.map(todo =>(
          <tr>
             <td>{todo.nombre_asignatura}</td>
    <td>{todo.horario}</td>
        <td>{todo.dia}</td>
         </tr>
        ))}  
         
      
      
    </tbody>
  </table>
  </body>
  </Fragment>
    );
};
    export default ListTodos;