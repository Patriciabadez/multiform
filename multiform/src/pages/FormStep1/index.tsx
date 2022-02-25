import {useForm, FormActions} from '../../contexts/FormContext';
import * as C from './styles';
import { Theme} from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect (() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload:1
        })
    },[])
    
    const handleNextStep = () => {
        if(state.name !==''){
             navigate("/step2");  
        }else{
            alert("Preencha os dados")
        }
     
    }
    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch ({
            type: FormActions.setName,
            payload:e.target.value
        })
        
    }
    return(
        <Theme>
            <C.Contatiner>
            <p>Passo 1/3</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo</p>

            <hr/>
            <label>
                Seu nome completo
                <input
                type="text"
                autoFocus
                value={state.name}
                onChange={handleNameChange}
                />
            </label>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Contatiner>
        </Theme>
    )
}