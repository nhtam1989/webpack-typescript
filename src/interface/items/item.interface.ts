export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface ItemEmpty {
    status: string;
    message: string;
}