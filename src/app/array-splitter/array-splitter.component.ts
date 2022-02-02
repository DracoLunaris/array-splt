import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './array-splitter.component.html',
  styleUrls: ['./array-splitter.component.css']
})
export class ArraySplitterComponent {

  stringArray = "1,2,3,4,5,6,7,8";
  splitInt = 3;
  errors = [];
  display = [];


  //for external use
  convertAndSplitArray(split: number, array: Array<string>) {
    this.splitStringArray(split, array.toString())
  }

  /*
  Method is used to split an array (acquired from a string) of length >= 0 into N equally sized arrays, where is a int > 0
  If the array is not devisable by N, the final Nth new array contains the remainder's worth of values.

  input: 
  number of sub arrays to split array into
  array to be split
  Output: split array (also modifies this.errors)
  */
  splitStringArray(split: number, stringArray: string) {
    this.errors = [];
    this.display = [];
    const regex = /^(\w+)(,\s*\w+)*$/g
    if (stringArray.match(regex) === null && stringArray !== "") { // this regex checks that the string is a list of word characters separated by commas 
      this.errors.push('notArray')
    }
    if (split <= 0 || split % 1 !== 0) { //make sure we got a positive int
      this.errors.push('badInt')
    }
    if (this.errors.length === 0) {
      if (stringArray === "") { // you can evenly split an empty array by any number by giving back an array of empty arrays
        for (let i = 0; i < split; i++) {
          this.display.push([]);
        }
      } else {
        const toBeSplitArray = stringArray.split(',');
        console.log(toBeSplitArray.length % split, toBeSplitArray.length)
        // if the number we are dividing by is larger than the array's length, then the entire array is the remainder and goes in the last field
        if (toBeSplitArray.length % split === toBeSplitArray.length) {
          for (let i = 0; i < split - 1; i++) {
            this.display.push([]);
          }
          this.display.push(toBeSplitArray);

        } else {
          let SubArrayLength = Math.floor(toBeSplitArray.length / split);
          let remainder = toBeSplitArray.length % split;
          if (remainder !== 0) {
            // If we have a remainder, turn the array length into something that can be divided into split arrays without a remainder. 
            // Slice will then handle the final array being shorter than expected on it's own without any issue
            SubArrayLength = (toBeSplitArray.length - remainder + split) / split
          }
          for (let i = 0; i < toBeSplitArray.length; i += SubArrayLength) {
            this.display.push(toBeSplitArray.slice(i, i + SubArrayLength));
          }
        }
      }
    }
    return this.display;
  }



}
