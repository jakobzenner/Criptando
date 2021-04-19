import './Moedas.css';
import React from "react";
import Nav from './Nav';
import Banner from './Banner';


const Moedas = () => {
    return (
       <div>
           <Nav />
           <Banner />
           <div className="container">
           <section className="content-moedas">

    
{/* Erster Paragraph von Content */}

           <h1 id={"moedas"}>Criptomoedas</h1>
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


       </div>

    )
};

export default Moedas;