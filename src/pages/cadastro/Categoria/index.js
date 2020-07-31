import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([]);
    
    const valoresIniciais ={
        nome: '',
        descricao: '',
        cor: '#00aec2'
    }
    const [values, setvalues] =  useState(valoresIniciais);
    
    function setvalue(chave, valor){
        setvalues({
            ...values,
            [chave]: valor,
        })
    }
    function handleChange(info){
        setvalue(info.target.getAttribute('name'), info.target.value);
    }

    useEffect(() => {
        const URL = window.location.href.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://kiriflix.herokuapp.com/categorias'; 
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })   
      }, []);

    return(
        <PageDefault>
            <h1>
                Cadastro de Categoria: {values.nome}
                </h1>
                <form onSubmit={function handleSubmit(info){
                    info.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    setvalues(valoresIniciais);
                }}>
                
               <FormField
                    label = 'Nome'
                    value ={values.nome}
                    type = 'text'
                    name = 'nome'
                    onChange ={handleChange}
               />
               <FormField 
                    label = 'Descrição'
                    value ={values.descricao}
                    type = 'textarea'
                    name = 'descricao'
                    onChange ={handleChange}
               />
               <FormField
                    label = 'Cor'
                    value ={values.cor}
                    type = 'color'
                    name = 'cor'
                    onChange ={handleChange}
               />
                {/*<div>
                    <label>
                    Descrição:
                    <textarea
                        type="text"
                        name='descricao'
                        value={values.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}       
                {/*<div>       
                    <label>
                    Cor:
                    <input
                        type="color"
                        name='cor'
                        value={values.cor}
                        onChange={handleChange}
                        />
                    </label>
                </div>*/}

                    <Button>
                    Cadastrar
                    </Button>
                </form>
                
                {categorias.length === 0 && (
                    <div>
                        Loading...
                    </div>
                )}

                <ul>
                    {categorias.map((categoria, indice)=>{
                        return(
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;