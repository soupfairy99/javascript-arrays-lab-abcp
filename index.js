const app = "I don't do much."
function
destructivelyAppendKitten()
{return kittens.push("Ralph")}
function
destructivelyPrependKitten()
{return kittens.unshift("Bob")}
function
destructivelyRemoveLastKitten()
{return kittens.pop("Garfield")}
function
destructivelyRemoveFirstKitten()
{return kittens.shift('Milo')}
function
appendKitten()
{return [...kittens,"Broom"]}
function
prependKitten()
{return ["Arnold",...kittens]}

function
removeLastKitten()
{return kittens.slice(0,kittens.length-1);}

removeLastKitten();
 function 
 removeFirstKitten()
 {return kittens.slice(1,kittens.length);}
 removeLastKitten();
/*
describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])

function
removeFirstKitten()
{
var removeFirstKitten = [kittens.slice(1,kittens.length -1)]; return removeFirstKitten,kittens}
removeFirstKitten();





/*

  

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
*/