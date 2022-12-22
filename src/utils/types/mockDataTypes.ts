export type TBDetails = {

    id: number;

    created: string;
    bookingDate: string;
    status: string;
    location: string;
    plan: string;
    seats: number;
    bookingAmount: number;
    totalAmount: number;
    orders: [{ item: string, price: number }],

    userDetails: {
        signedUp: string;
        name: string;
        emailAddress: string;
        totalBooking: number;
        totalAmountOfBookings: number;
        totalAmountOfCafeOrder: number;
    }

}

export type TUserDetails = {
    id: number;
    signedUp: string;
    name: string;
    emailAddress: string;
    totalBooking: number;
    totalAmountOfBookings: number
    totalAmountOfCafeOrder: number;
    bookings: [
        {
            bookingId: number;
            bookingDate: string;
            status: string;
            location: string;
            plan: string
            seats: number
        },
    ]
}

export type UserData = {
    id: number;
    user: string;
    emailAddress: string;
    bookings: number;
    amountSpent: number;
    accountCreated: string;
}

export type BookingsData = {
    bookingId: number;
    user: string;
    location: string;
    plan: string;
    seats: number;
    status: string;
    bookingDate: string;
}