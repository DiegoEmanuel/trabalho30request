import React, {useEffect,useState} from 'react'
import axios from 'axios';

import './index.css'


const Pizza = () => {    

    const [pizza,setPizza] = useState(null);
    const [pizza2,setPizza2] = useState(null);


    useEffect(()=>{
        
        async function pegarDados()   {
            const resposta = await axios.get('https://foodish-api.herokuapp.com/api/')
            setPizza( resposta.data )
        }
        pegarDados();  
    }, []);

    if (pizza === null){
        return<p>Carregando....</p>
    }

    
    async function pegarDados2()   {
        const resposta = await axios.get('https://foodish-api.herokuapp.com/api/')
        setPizza2( resposta.data )
    }
    pegarDados2();  

    return (
    <> 
    
        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />










        
        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />










        
        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />

        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


    </>)





};



export default Pizza;
