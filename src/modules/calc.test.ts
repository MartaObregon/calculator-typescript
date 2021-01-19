

import Calc, {CalcInput, InputType, OperatorType} from './calc'

test('derive state', () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operational, operation: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operational, operation:OperatorType.Equals}
    ]


    const state =Calc.getState(inputs);
    expect(state.displayValue).toEqual(15)
})

test('generates operations', () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operational, operation: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operational, operation:OperatorType.Equals}
    ]

     const operations: Array<Operation> = [
         {operator: OperatorType.Add, value:12},
         {operator: OperatorType:}
     ]
    const state =Calc.getState(inputs);
    expect(state.displayValue).toEqual(15)
})