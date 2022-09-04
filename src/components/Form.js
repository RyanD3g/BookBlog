import '../styles/Form.scss';
export const Form = ()=>{
    return(
        <>
            <div className="rootForm">
                <section className="form">
                    <form action="http://localhost:3001/CreateBlog" method="POST">
                        <h2>Minha Mensagem</h2>
                    <span id='span'>Nome:</span> <input type="text" placeholder="Digite seu nome..." name='user'></input>
                        <span>Livro:</span> <input type="text" placeholder="Ex: O homem de giz" name='book'></input>
                        <span>Menssagem:</span> <input name="message" type="text" placeholder="Digite sua mensagem..."></input>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </div>
        </>
    )
}
