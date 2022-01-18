import axios from 'axios';
import { useEffect, useState } from 'react';
import './Ingredientes.css'
import carne from '../../assets/img/ingredientes/Carne.png'

const Ingredientes = () => {
    const [ingredientes, setIngredientes] = useState('')
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(350)

    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/bulldog/ingredientes')
    .then((response)=>{
        setIngredientes(response.data)
    })    
    },[])

    const mostrar = (ingre, precio) =>{
        setPedido([ingre,...pedido])
        setTotal(total+precio)
    }

    const remove = (id, preciomenos) =>{
        setPedido(pedido.filter((ped) => ped.id != id))
        setTotal(total-preciomenos)
    }
    
    return ( 
        <div className='row my-5 todo'>
            <div className='col-6'>
                {ingredientes == '' ?
                    <p>cargando...</p>
                :   
                    ingredientes.map((ingre)=>(
                        <div key={ingre.id}>
                            <div className="d-grid gap-2 col-6 mx-auto my-1">
                                <button className="btn btn-outline-warning d-flex justify-content-between" type="button" onClick={()=>mostrar(ingre, ingre.precio)} 
                                disabled={pedido.find(ped=>ped.id == ingre.id ? true : false)}><img className='heigth' src={require(`../../assets/img/ingredientes/${ingre.imagen}.png`)}></img> {ingre.nombre} ${ingre.precio}</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className='col-6'>
                
                {pedido.length == 0 ?
                    <p className='text-center'>Elegi tus ingredientes</p>
                :
                    <div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-outline-warning d-flex justify-content-between" type="button"><img className='heigth' src={carne}></img>hamburguesa $350</button>
                        </div>
                        {pedido.map((ped)=>(
                            <div className="d-grid gap-2 col-6 mx-auto" key={ped.id}>
                                <button className="btn btn-outline-warning d-flex justify-content-between" type="button" onClick={()=> remove(ped.id, ped.precio)}><img className='heigth' src={require(`../../assets/img/ingredientes/${ped.imagen}.png`)}></img>{ped.nombre} ${ped.precio}</button>
                            </div>
                        ))}
                        <div className='blanco'>
                            <h2>TOTAL:{total}</h2>
                        </div>
                    </div>
                }
                
            </div>
            
        </div>
     );
}
 
export default Ingredientes;