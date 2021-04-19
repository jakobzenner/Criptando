import './Nav.css'

const Contato = () => {
    return (
        <div>
            <section className="contato" id={"contato"}>
            <h1 className="heading-menu">Contato</h1>
            <h3>Nosso endereço é virtual:</h3>
            <p className="email">contato@criptando.com</p>

            <div className="icons"> 
            <a href=""><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fas fa-envelope-open-text"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>

            </div>

           </section>
        </div>
    );
}

export default Contato;