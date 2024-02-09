interface User {
    id: number;
    name: string;
}

// Interface para uma função
interface Greet {
    (name: string): string;
}

// Interface para uma classe
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

// Interface para um array
interface StringArray {
    [index: number]: string;
}

// Interface com propriedades opcionais
interface Config {
    color?: string;
    width?: number;
}

// Interface com propriedades somente leitura
interface Point {
    readonly x: number;
    readonly y: number;
}

// Interface que estende outra interface
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

// Interface que implementa uma classe
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}