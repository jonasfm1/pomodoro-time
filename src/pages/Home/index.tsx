import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home(){
    return (
        <HomeContainer>

            <form action="">

                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput id="task" list="task-suggestions" placeholder="De um nome para o seu projeto"/>

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Banana" />
                    </datalist>

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput id="minutesAmount" type="number" placeholder="00" step={5} min={5} max={60}/>

                    <span>Minutos.</span>
                </FormContainer>
            

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>

                    <Separator>:</Separator>

                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled type="submit">
                    <Play size={24}/>
                    Comecar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}