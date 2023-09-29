import React from 'react';
import Button from '../../components/Shared/Button';

 
const Table = ({id, headers, data, keys, deleteElement, updateElement, canDelete=false}) => {

  return (
    <table className="w-full min-w-max table-auto text-center text-white border-collapse border border-slate-500 ">
      <thead className="border border-slate-600">
        <tr className="bg-gray-800 text-white">
          {headers?.map((header) => (
          <th className="py-2 px-4" key={header}>{header}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
            {data?.map((d) => (
              <tr key={d[id]} className="border-b" >
                {keys.map((key) => (
                  <td key={key} className="py-2 px-4 text-white text-center border border-slate-700">{key.includes('http') ? <img className=" mx-auto object-fill h-100 w-96" src={key} />  : key.includes("Time") ||  key == "llegadas" || key == "salidas" ? d[key] : key.includes('.')? d[key.split('.')[0]][key.split('.')[1]] : key == "StatusDisplay" ? d[key] == true ? "Activo" : "Inactivo" : d[key]} </td>
                ))}
                  <td className="py-0 px-0 text-white text-center border flex gap-2 border-slate-700">
                    <Button variant="primary" onClick={() => updateElement(d[id])} >
                      Editar
                    </Button>
                    {(canDelete)? null:
                    (   <Button variant="danger" onClick={() => deleteElement(d[id])} >
                      Eliminar
                    </Button>)
                    }
                    
                     </td>

                </tr>
            ))}
      </tbody>
    </table>
  );
};

export default Table;