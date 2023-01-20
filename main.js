function createAdde(x) {
    return function(y) {
      return function(z){
        return function(xx){
            return (x * x) +(y % y) - (z) / (xx);
        }
      };
    };
  }
const addEight = createAdde(8);
const addd = addEight(8);
const adddd = addd(8);
const addddd = adddd(8)
console.log(adddd(8));
function createAdder(x){
    return function (y){
        return x + y;
    }
};
// const addEight = createAdder(8);
// console.log(addEight(10)); // 18
// console.log(addEight(17)); // 25
// console.log(addEight(50)); // 58
// console.log(addEight(100)); // 108
// console.log(addEight(92)); // 100


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

async function printMovieInfo(movieName){
    try{
      let movie = await  getMovieInfo(movieName)
      console.log(movie)
    } catch (error){
        console.warn(error)
    }

}
printMovieInfo("poop");



function Poop(x){
    return new Promise((a,b) => {
        if (x === 8){
            var func = function createAdder(x){
                 return function createAdder2(y){
                   return x + y;
                };
            };
            a(func(8))
        }else{
            b(console.log('poop'))
        }

    })
}

async function caprom(xxxxx){
    try{
        let xxx = Poop(xxxxx);
        let xxxx = xxx(8)
        console.log(xxxx)
    }
    catch (error){
        error
    }
}

caprom(8);