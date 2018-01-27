function treasureLocator(coordinates) {
    for (let i = 0; i < coordinates.length; i += 2) {
        let x = coordinates[i];
        let y = coordinates[i + 1];

        if(location(x, y) === false) {
            console.log("On the bottom of the ocean");
        } else {
            console.log(location(x, y));
        }
    }

    function location(x, y) {
        let tonga = (x, y) => (x >= 0 && x <= 2) && (y >= 6 && y <= 8) ? "Tonga" : false;
        let cook = (x, y) => (x >= 4 && x <= 9) && (y >= 7 && y <= 8) ? "Cook" : false;
        let samoa = (x, y) => (x >= 5 && x <= 7) && (y >= 3 && y <= 6) ? "Samoa" : false;
        let tuvalu = (x, y) => (x >= 1 && x <= 3) && (y >= 1 && y <= 3) ? "Tuvalu" : false;
        let tokelau = (x, y) => (x >= 8 && x <= 9) && (y >= 0 && y <= 1) ? "Tokelau" : false;

        return tonga(x, y) || cook(x, y) || samoa(x, y) || tokelau(x, y) || tuvalu(x, y);
    }
}