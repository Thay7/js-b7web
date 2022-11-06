function calcularImovel(metragem, quartos) {
    let m2 = 3000

    switch (quartos) {
        case 1:
        default:
            m2 = 3000
            break;

        case 2:

            m2 = m2 * 1.2
            break;

        case 3:
            m2 = m2 * 1.5
            break;
    }
            let preco = metragem * m2

            return preco
    }

    let metragem = 123
    let quartos = 3
    let preco = calcularImovel(metragem, quartos)
    console.log(`A casa custa R$${preco}`)