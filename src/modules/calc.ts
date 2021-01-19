// list of button presses or user inputs -- so we get a button press log?
// Calculator Brain:
/**Input: --> [UserInput, UserInput....]
 * Generate: --> {State}
 */

export enum InputType {
    Numerical,
    Operational,
}

export enum OperatorType {
    Add,
    Substract, 
    Equals
}

export type CalcInput = {type: InputType.Numerical; value: number} |
{type: InputType.Operational; operation:OperatorType}

export type CalcState = {
    displayValue: number;
}

export type Operation = {
    operator: OperatorType;
    value: number;
}


type OperationBuilder = {
    operations: Operation[];
    working: Operation;
}


const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
    const builder = inputs.reduce<OperationBuilder>((builder, input) => {

        switch (input.type) {
            case InputType.Numerical:
                const prevValue = builder.working?.value || 0
                const newValue = prevValue * 10 + input.value;
                return {...builder, working: {...builder.working, value:newValue}};

            case InputType.Operational:
                return {operations: [...builder.operations, builder.working],
                working: {operator: input.operation, value:0}}

        }



    }, {operations: [], working:{operator: OperatorType.Add, value:0 }} as OperationBuilder )
}

const getState = (inputs: Array<CalcInput>): CalcState => {

    const result = inputs.reduce()


    return {displayValue: 0}
}

const Calc = {
    getState
}


export default Calc