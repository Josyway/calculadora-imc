import styles from './Resultado.module.css'

import Abaixo from '../img/abaixo.png'
import Normal from '../img/normal.png'
import Sobrepeso from '../img/sobrepeso.png'
import Obesidade1 from '../img/obesidade1.png'
import Obesidade2 from '../img/obesidade2.png'
import Obesidade3 from '../img/obesidade3.png'

const Resultado = () => {
    return (
        <div className="container">
            <h1>Entenda o seu resultado</h1>
            <div className={styles.result}> 
                <div className={styles.resultItem}>
                    <img src={Abaixo} alt="Abaixo do peso"/>
                    <span>18,5 ou menos</span>
                    <h4>Abaixo do normal</h4>
                    <p className={styles.descricao}>
                    Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.
                    </p>
                </div>
                <div className={styles.resultItem}>
                    <img src={Normal} alt="Normal" />
                    <span>Entre 18,6 e 24,9</span>
                    <h4>Normal</h4>
                    <p className={styles.descricao}>
                    Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
                    </p>
                </div>
                <div className={styles.resultItem}>
                    <img src={Sobrepeso} alt="Sobrepeso" />
                    <span>Entre 25,0 e 29,9</span>
                    <h4>Sobrepeso</h4>
                    <p className={styles.descricao}>
                    Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.
                    </p>
                </div>
                <div className={styles.resultItem}>
                    <img src={Obesidade1} alt="Obesidade gral I" />
                    <span>Entre 30,0 e 34,9</span>
                    <h4>Obesidade grau I</h4>
                    <p className={styles.descricao}>
                    Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
                    </p>
                </div>
                <div className={styles.resultItem}>
                    <img src={Obesidade2} alt="Obesidade gral II" />
                    <span>Entre 35,0 e 39,9</span>
                    <h4>Obesidade grau II</h4>
                    <p className={styles.descricao}>
                    Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
                    </p>
                </div>
                <div className={styles.resultItem}>
                    <img src={Obesidade3} alt="Obesidade gral III" />
                    <span>Acima de 40,0</span>
                    <h4>Obesidade grau III</h4>
                    <p className={styles.descricao}>
                    Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
                    </p>
                </div>
            </div>


        </div>
    )
}


export default Resultado