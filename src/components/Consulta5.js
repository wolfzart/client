import React,{Fragment ,useEffect,useState} from "react";

const ListTodos = () => {
    const [todos,setTodos] = useState([]);


    const getTodos=async() =>{

        try {
            const response = await fetch('http://localhost:3000/deuda');
            
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
        {" "}
        <body>
            <h1 class="text-center">Alumnos con Deudas</h1>
        <table class="table mt-5 text-center " >
            
    <thead>
      <tr>
        <th >Rut Alumno</th>
        <th>Deuda Total</th>
      </tr>
    </thead>
    <tbody>
      
        {todos.map(todo =>(
          <tr>
             <td>{todo.rut_alumno}</td>
    <td>{todo.deuda_total}</td>
         </tr>
        ))}  
         
      
      
    </tbody>
  </table>
  </body>
  </Fragment>
    );
};
    export default ListTodos;