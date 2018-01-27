function moviePrices(input) {
    let movieTitle = input[0].toLowerCase();
    let dayOfTheWeek = input[1].toLowerCase();

    let price = 0;

    switch (movieTitle) {
        case "the godfather":
            switch (dayOfTheWeek) {
                case "monday":
                    price = 12;
                    break;

                case "tuesday":
                    price = 10;
                    break;

                case "wednesday":
                    price = 15;
                    break;

                case "thursday":
                    price = 12.5;
                    break;

                case "friday":
                    price = 15;
                    break;

                case "saturday":
                    price = 25;
                    break;

                case "sunday":
                    price = 30;
                    break;

                default:
                    return "error";
            }
            break;

        case "schindler's list":
            switch (dayOfTheWeek) {
                case "monday":
                    price = 8.5;
                    break;

                case "tuesday":
                    price = 8.5;
                    break;

                case "wednesday":
                    price = 8.5;
                    break;

                case "thursday":
                    price = 8.5;
                    break;

                case "friday":
                    price = 8.5;
                    break;

                case "saturday":
                    price = 15;
                    break;

                case "sunday":
                    price = 15;
                    break;

                default:
                    return "error";
            }
            break;

        case "casablanca":
            switch (dayOfTheWeek) {
                case "monday":
                    price = 8;
                    break;

                case "tuesday":
                    price = 8;
                    break;

                case "wednesday":
                    price = 8;
                    break;

                case "thursday":
                    price = 8;
                    break;

                case "friday":
                    price = 8;
                    break;

                case "saturday":
                    price = 10;
                    break;

                case "sunday":
                    price = 10;
                    break;

                default:
                    return "error";
            }
            break;

        case "the wizard of oz":
            switch (dayOfTheWeek) {
                case "monday":
                    price = 10;
                    break;

                case "tuesday":
                    price = 10;
                    break;

                case "wednesday":
                    price = 10;
                    break;

                case "thursday":
                    price = 10;
                    break;

                case "friday":
                    price = 10;
                    break;

                case "saturday":
                    price = 15;
                    break;

                case "sunday":
                    price = 15;
                    break;

                default:
                    return "error";
            }
            break;

        default:
            return "error";
    }

    return price;
}