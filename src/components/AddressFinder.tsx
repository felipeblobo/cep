const AddressFinder = ()=> {
  return (
    <div>
        <div className='search-address'>
          <label htmlFor="cep">Busca</label>
          <input type='number' id="cep" placeholder="CEP"/>
        </div>
        <form action="">
          <div>
            <label htmlFor="rua">Rua</label>
            <input type="text" id="rua"/>  
          </div>  
          <div>
            <label htmlFor="numero">Número</label>
            <input type="number" id="numero" />  
          </div> 
          <div>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" id="complemento" />  
          </div>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" />  
          </div>          
          <div>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" />  
          </div> 
          <div>
            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" />  
          </div> 
        </form>      
    </div>
  )
}

export default AddressFinder
