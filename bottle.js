//OSBALDO
/*Write a loop that prints out the following song
starting a t 99, ends with 1*/

/*var bottles = 100;
var numbottles=0;
for (var i = bottles.length - 1; i >= 0; i--) {
        numbottles += bottles[i];
    return numbottles;
}
           console.log( numbottles+' bottles of beer on the wall! '+numbottles +' bottles of beer!');*/
           var nBottle = 99;
           var text = "";
           
           while(nBottle>0){
               text = "the number is "+ nBottle;
               console.log(text);
               nBottle--;
           }
