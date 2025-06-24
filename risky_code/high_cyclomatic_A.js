function complexFunction(a, b, c, d, e) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    if (e > 0) {
                        console.log('All positive');
                    } else {
                        console.log('a, b, c, d positive, e non-positive');
                    }
                } else {
                    console.log('a, b, c positive, d non-positive');
                }
            } else {
                console.log('a, b positive, c non-positive');
            }
        } else {
            console.log('a positive, b non-positive');
        }
    } else {
        console.log('a non-positive');
    }

    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            console.log('Even number:', i);
        } else {
            console.log('Odd number:', i);
        }

        switch (i) {
            case 0:
                console.log('i is 0');
                break;
            case 1:
                console.log('i is 1');
                break;
            case 2:
                console.log('i is 2');
                break;
            case 3:
                console.log('i is 3');
                break;
            case 4:
                console.log('i is 4');
                break;
            case 5:
                console.log('i is 5');
                break;
            case 6:
                console.log('i is 6');
                break;
            case 7:
                console.log('i is 7');
                break;
            case 8:
                console.log('i is 8');
                break;
            case 9:
                console.log('i is 9');
                break;
            default:
                console.log('i is something else');
                break;
        }
    }

    if (a > 1) {
        if (b > 1) {
            if (c > 1) {
                if (d > 1) {
                    if (e > 1) {
                        console.log('All greater than 1');
                    } else {
                        console.log('a, b, c, d greater than 1, e not');
                    }
                } else {
                    console.log('a, b, c greater than 1, d not');
                }
            } else {
                console.log('a, b greater than 1, c not');
            }
        } else {
            console.log('a greater than 1, b not');
        }
    } else {
        console.log('a not greater than 1');
    }
}