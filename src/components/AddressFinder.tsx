const AddressFinder = ()=> {
  return (
    <div>
        <div className='search-address'>
          <label htmlFor="cep">Busca</label>
          <input type='number' id="cep" placeholder="CEP"/>
        </div>
        <form action="">
          <div className='address street-address'>
            <label htmlFor="rua">Rua</label>
            <input type="text" id="rua"/>  
          </div>  
          <div className='address number-address'>
            <label htmlFor="numero">Número</label>
            <input type="number" id="numero" />  
          </div> 
          <div className='address'>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" id="complemento" />  
          </div>
          <div className='address'>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" />  
          </div>          
          <div className='address'>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" />  
          </div> 
          <div className='address'>
            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" />  
          </div> 
        </form>      
    </div>
  )
}

export default AddressFinder
