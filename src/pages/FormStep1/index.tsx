import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router-dom'

export const FormStep1 = () => {
    const handleNextStep = () => {

    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo 1 de 3</p>
                <h1>Vamos Começar com seu Nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label htmlFor="">
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                    />
                </label>
                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    )
}