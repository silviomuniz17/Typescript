// elemento do Dom são os elemento que tem em uma pagina HTML como div, p, h1
import { Views } from "./views.js";
//extends que dizer que estou chamando a classe view para usar um elemento que existe lá
//estou recebendo de uma variavel generica T da class vew e passando para Negociacoes
export class Negociacoes_Views extends Views {
    // protected quer dizer que apenas o pai e filho vai ter acesos assim no principal tbm não vai aparecer apenas o updat
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.listar().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)} 
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    //criando um metodo privado chamado formatar para que eu possa chamar ele logo á cima em template que apenas aqui pode acessar
    // assim fica mais organizado
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
