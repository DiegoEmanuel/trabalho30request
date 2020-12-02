import React, {useEffect,useState} from 'react'
import axios from 'axios';

import './index.css'


const Pizza = () => {    

    const [pizza,setPizza] = useState(null);



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
    return (
    <section class="tudo"> 
    <div clas='textoimg'></div>
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

        <div clas='textoimg'></div>
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

        <div clas='textoimg'> Imagem20 </div>
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

        <div clas='textoimg'> Imagem30 </div>
        <h1>_____Produto______</h1>  
        <img className='img-pizza' src={pizza.image}  />


    </section>)





};



export default Pizza;
