# Angular 2
Aulas de Angular 2

ferramentas necessárias
- Node.js
- Typescript


#[(ngModel)] = "variável_modelo_qualquer"

os parênteses '()' dizem que de alguma forma o ng2 está acessando algo, 
como uma entrada de dados que irá alterar os valores de uma variável

ao retirar os parêntesis, o elemento só recebe o valor da variável sem poder alterar ela

[ngModel] -> recebe valor de variável
[(ngModel)] -> e altera valor de variável (2 way data bind)

# Repeaters
*ngFor="let t of tasks"

'let' é um elemento do ecmascript 6


#Propertybind
[class.h1]="variavel"
transforma em class="h1" se variável for verdadeira


#Para o entendimento mais claro
- *
- [] property binding | componentes = leitura e acessar dados
- () event binding | template = para eventos de componentes
- [()] two way databind
- {{}}
