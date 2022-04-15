export interface Booking {
    price: number,
    size: number,
};

export class BookingList {
    bids: Booking[] = [];
    asks: Booking[] = [];
}