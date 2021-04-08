import './Content.css';

const Content = () => {
    return (
       <div>
           <div className="container">
           <section className="content-moedas" id={"moedas"}>

    
{/* Erster Paragraph von Content */}

           <h1>Criptomoedas</h1>
           <p>O biticoin foi feito em uma rede de Blockchain criada por um grupo de desenvolvedores cujo o líder foi o Satoshi Nakamoto. Assim nasceu a primeira criptomoeda a entrar em circulação  no mundo digital. Hoje em dia ela não é  mais a única.<br />

<br />O biticoin se transformou em uma nova classe de ativos, chamadas criptomoedas. Essas moedas digitais descentralizadas  nasceram em 2009.<br />

Idealizado para criar uma forma de dinheiro totalmente eletrônico o bitcoin apesar de ser lançado em 2009 foi um desenvolvimento da ideia de dinheiro eletrônico  que surgiu em já em 1980.<br />

<br />O biticoin é a digitalização do dinheiro e com ele é possivel enviar o dinheiro diretamente sem depender de instituição financeira ou outro tipo de organização, de forma transparente.<br />

<br />As outras criptomoedas do mercado são chamadas Altcoins.</p>

{/* Zweiter Paragraph von Content */}
<h1>Biticoin</h1>
<p>O bitcoin é uma moeda digital baseada em um sistema de criptografia. Esse sistema garante o funcionamento de todas as transações, que por sinal, acontecem de maneira anônima.<br />

<br />Ele não é sujeito a  regulamentação de empresas, nstituições financeiras ou governo. Ele é negociado em uma rede própria, o blockchain que por sinal é um grande banco de dados.<br />

<br />Segundo os criadores da moeda, existe um número limite de bitcoins a serem produzidos:<br />
21 milhões de unidades até o ano de 2140.</p>

{/* Dritter Paragraph von Content */}
<h1>Ethereum</h1>
<p>Ethereum é o nome da rede blockchain, já Ether(ETH) é uma criptomoeda. Para realizar operações ou execução na rede  de contratos inteligentes (smart contracts) é necessário efetuar o pagamento destinado aos mineradores em Ether(ETH).<br />

<br />Assim o Ethereum é como se fosse um carro e o Ether (ETH) o seu combustível, ainda sim, é como o uso de Ethereum para se referir a criptomoeda.<br />

<br />Essa moeda virtual surgiu através do emigrante russo Vitalk Buterin no Canadá. Esse jovem entusiasta teve a ideia de retornar as camadas adicionais de informação, camadas essas que já haviam sido discutidas originalmente no Bitcoin. Assim, atribuindo a capacidade de executar programas simples.<br />

‍<br />Em julho de 2014, houve uma venda no formato de ICO público que levantou o equivalente a 18 milhões de dólares, porém a rede só ficou de fato pronta em ano depois<br />

<br />Criado para ser uma super-rede mundial de computadores capaz de executar as mais diversas tarefas de forma autônoma e não-censurável. Ao mesmo tempo, a rede possui sua própria criptomoeda, usada como meio de troca e forma de armazenar valores.<br />


<br />Multifaceada, a Ethereum possibilita desta forma uma flexibilidade ao criador do contrato inteligente (smart contract). Possui um histórico de cinco anos de funcionamento initerrupto com grande poder computacional de mineradores, tornando-a mais segura para ransações rápidas e registro de informação. </p>


           </section>

           <section className="propaganda">
            <h1 className="oferta">Ofertas especiais</h1>

            <a href="https://apretailer.com.br/click/60692d892bfa8174d7430b22/172348/264463/subaccount" target="_blank"><div className="oiFibra"></div></a>

           </section>


           </div>

           <section className="guia" id={"guia"} >
            <h1 className="heading-menu" >Guia do investidor</h1>
            <h3>Como investir o seu dinheiro em Criptomoedas ?</h3>
            <p>Pode-se ivestir em Bitcoins e em outras criptomoedas de algumas formas.É possível comprar cotas de fundos de criptomoedas, negociá-las em uma corretora especializada (conhecida também como exchange),aceitando as moedas digitais como forma de pagamento ou minerando.<br />

<br />Adiquirir as cotas de fundos é uma das maneira mais simples.<br />

<br />Esses tipos de carteiras são distribuídas por corretoras e plataformas de investimento, sendo que algumas demandam aplicações de valor relativamente baixo (de R$ 5.000 ou até menos). Os fundos podem ser uma alternativa positiva para quem quer se expor ao mercado das moedas virtuais, quem decide e acompanha essas aplicações é um gestor especializado.<br />

<br />Uma outra maneira simples de investir em Bitcoins e outras criptomoedas é por meio de uma corretora especializada. Existe algumas no Brasil, chamadas exchanges, que oferecem esse tipo de serviço. Nesse caso o primeiro passo é abrir uma conta  na exchange, preenchendo o cadastro com dados pessoais. Talvez seja necessário validar a identidade do investidor.
</p>

           </section>

           <section className="sobreNos" id={"sobreNos"}>
            <h1 className="heading-menu">Sobre Nós</h1>
            <h3>Quem somos?</h3>
            <p>Somos um portal voltado ao estudo e desenvolvimento de boas praticas no mercado de moedas virtuais. Desta forma, além de axiliar os nossos visitantes a optimizar e seus lucros e investimento, aconselhar também pessoas físicas e jurídicas a dar o primeiro passo nesse mercado que cresce a cada dia. Aqui você encontra também ofertas diversas de produtos e serviços para pessoas físicas e jurídicas na nossa  seção de propagandas.</p>

           </section>

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

    )
};

export default Content;