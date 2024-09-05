export interface Device {
    id: number;
    img: string;
    title: string;
    type: 'wired' | 'wireless';
    price: number;
    discount: number;
    rate: string;
    count: number;
    data: {
        type: 'вставные' | "накладные";
        microphone: 'есть';
        noise_reduction: 'активное';
        weight: '150 г' | '290 г';
    };
}


const Database = (): Device[] => {
    return [
        {id: 1, img: './assets/img_1.png', title: 'Apple BYZ S852I', type: "wired", price: 2927,discount: 0, rate: "4.7", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"} },
        {id: 2, img: './assets/img_2.png', title: 'Apple EarPods', type: "wired", price: 2327,discount: 0, rate: "4.5", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 3, img: './assets/img_3.png', title: 'Apple EarPods', type: "wired", price: 2327,discount: 0, rate: "4.5", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 4, img: './assets/img_1.png', title: 'Apple BYZ S852I', type: "wired", price: 2927,discount: 500, rate: "4.7", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 5, img: './assets/img_2.png', title: 'Apple EarPods', type: "wired", price: 2327,discount: 0, rate: "4.5", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 6, img: './assets/img_3.png', title: 'Apple EarPods', type: "wired", price: 2327,discount: 0, rate: "4.5", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 7, img: './assets/img_4.png', title: 'Apple EarPods', type: "wireless", price: 9527,discount: 2550, rate: "4.7", count: 1, data:{ type: "накладные", microphone: "есть", noise_reduction: "активное", weight: "290 г"}},
        {id: 8, img: './assets/img_5.png', title: 'GERLAX GH-04', type: "wireless", price: 6527,discount: 1500, rate: "4.7", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
        {id: 9, img: './assets/img_6.png', title: 'BOROFONE BO4', type: "wireless", price: 7527,discount: 2000, rate: "4.7", count: 1, data:{ type: "вставные", microphone: "есть", noise_reduction: "активное", weight: "150 г"}},
    ]
}

export default Database();