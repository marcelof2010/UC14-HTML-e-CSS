cost estado = prompt('Estado de destino (sigla):\n' +
'Ex: RN, SP, RS, AM')?.toUpperCase().trim();

let frete = 0;
let regiao = '';
let prazo = '';

switch (estado) {
    case 'RN':
    case 'CE':
    case 'PB':
    case 'PE':
    case 'MA':
    case 'PI':
    case 'AL':
    case 'SE':
    case 'BA':
        regiao = 'Nordeste';
        frete = 15;
        prazo = '3 dias úteis';            
 break;

    case 'SP':
    case 'RJ':
    case 'MG':
    case 'ES':
        regiao = 'Sudeste';
        frete = 25;
        prazo = '5 dias úteis';
        break;

    case 'RS':
    case 'SC':
    case 'PR':
        regiao = 'Sul';
        frete = 30;
        prazo = '7 dias úteis';
        break;

    case 'GO':
    case 'MT':
    case 'MS':
    case 'DF':
        regiao = 'Centro-oeste'
        frente = 35;
        prazo = '8 dias úteis'
        break;

    case 'AM':
    case 'PA':
    case 'AC':
    case 'RO':
    case 'RR':
    case 'AP':
    case 'TO':

        regiao = 'Norte'
        frente = 45;
        prazo = '12 dias úteis';
        break;
default:
    regiao = 'Estado nao encontrado';
    frente = 0
    prazo = 'Indisponível'
}

if (frente > 0) {    
alert(
    'Estado: ${estado}\n'+
    'Região: ${regiao}\n'+
    'frente: ${frente},00\n'+
    'Prazo: ${prazo}'
    
);
console.log({ estado, regiao, frete, prazo});
} else {
    alert('Estado "${estado}" não encontrado. \nVerifique a sigla e tente novamente.`);
}