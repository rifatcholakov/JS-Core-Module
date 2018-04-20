function restHouse(availableRooms, guests) {
    let rooms = new Map();
    let guestsWithoutRooms = 0;

    for (let room of availableRooms) {
        if(room.type === 'double-bedded') {
            rooms.set(room.number, {type: room.type, availableBeds: 2});
        } else {
            rooms.set(room.number, {type: room.type, availableBeds: 3});
        }
    }

    for (let pair of guests) {
        let roomFound = false;

        if(pair.first.gender !== pair.second.gender) {
            for (let [key, value] of rooms) {
                if(value.type === 'double-bedded' && value.availableBeds === 2) {
                    value.guests = [];
                    value.guests = [pair.first, pair.second];
                    value.availableBeds = 0;
                    roomFound = true;
                    break;
                }
            }
        } else {
            for (let [key, value] of rooms) {
                if(value.type === 'triple' && value.availableBeds > 1) {
                    if(value.guests === undefined) {
                        value.guests = [];
                    } else if(value.guests[0].gender !== pair.second.gender) {
                        continue;
                    }

                    if(pair.first !== undefined){
                        value.guests.push(pair.first);
                        value.availableBeds -= 1;
                    }

                    value.guests.push(pair.second);
                    value.availableBeds -=1;

                    roomFound = true;
                    break;
                } else if (value.type === 'triple' && value.availableBeds === 1) {
                    if(value.guests[0].gender === pair.second.gender) {
                        value.guests.push(pair.first === undefined ? pair.second : pair.first);
                        value.availableBeds -=1;
                        pair.first = undefined;
                    }
                }
            }
        }

        if(!roomFound) {
            guestsWithoutRooms += pair.first === undefined ? 1 : 2;
        }
    }

    for (let [room, value] of [...rooms].sort()) {
        console.log(`Room number: ${room}`);

        if(value.guests !== undefined) {
            for (let guest of value.guests.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })) {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }

        console.log(`Empty beds in the room: ${value.availableBeds}`);
    }

    console.log(`Guests moved to the tea house: ${guestsWithoutRooms}`);
}