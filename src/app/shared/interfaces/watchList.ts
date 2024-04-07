export interface IWatchlist {
    category: string;
    name: string;
    lastPrice: number;
    change: {
        value: number;
        viewValue: number;
    };
    volume: number;
}


// category: string;
// data: {
//     name: string;
//     lastPrice: number;
//     change: {
//         value: number;
//         viewValue: number;
//     };
//     volume: number;
// } [];