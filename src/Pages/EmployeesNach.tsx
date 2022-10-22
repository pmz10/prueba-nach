import React from "react";

const EmployeesNach = () => {
  const [employ, setEmploy] = React.useState([]);

  React.useEffect(() =>{
    obtenerDatos();
  }, [])
  
  const obtenerDatos = async () =>{
    const data = await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:tu_nombre')
    const users = await data.json()
    console.log(users)
    setEmploy(users)
  }

  return (
    <div>
      <h1 className="text-center mt-3">EmployeesNach</h1>
      <ul>
        {
          employ.map(({item}: any) =>(
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
};
export default EmployeesNach;
