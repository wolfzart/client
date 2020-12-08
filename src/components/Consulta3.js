import React,{Fragment ,useEffect,useState} from "react";

const ListTodos = () => {
    const [todos,setTodos] = useState([]);


    const getTodos=async() =>{
        try {
            const response = await fetch('http://localhost:3000/anotaciones');
            
            const jsonData = await response.json();
            setTodos(jsonData);
           Window.location ="/";
           
       } catch (err) {

           console.error(err.message);
        }

    };
    const Eliminar= async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/expulsarAnotaciones')
        const jsonData = await response.json();
            setTodos(jsonData);
           Window.location ="/";
      } catch (err) {
        console.error(err.message);
      }
    }
    useEffect(()=>{
        getTodos();

    },[]);
    return (<Fragment>

        {" "}
        <body>
        <h1 class="text-center">Alumnos con 3 anotaciones </h1>
        <table class="table mt-5 text-center "  >
            
    <thead>
      <tr>
        <th >Nombre alumnos a expulsar por anotaciones </th>
      </tr>
    </thead>
    <tbody>
      
        {todos.map(todo =>(
          <tr>
             <td>{todo.nombre}</td>
         </tr>
        ))}  
         
      
      <button type="submit" class="btn btn-primary mb-5" onClick={e=>Eliminar(e)} > expulsar</button>
    </tbody>
  </table>
  <div>
    
  </div>
  </body>
  </Fragment>
    );
};
    export default ListTodos;