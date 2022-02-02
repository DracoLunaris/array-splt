import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ArraySplitterComponent } from './array-splitter.component';

let component: ArraySplitterComponent;
let fixture: ComponentFixture<ArraySplitterComponent>;

describe('ArraySplitterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ArraySplitterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySplitterComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("it should add an error to the error array and produce an empty array when supplied with a non array (sentence)", () => {
    component.stringArray = "not an array";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add an error to the error array and produce an empty array when supplied with a non array (array with trailing comma)", () => {
    component.stringArray = "not, an, array,";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add an error to the error array and produce an empty array when supplied with a non array (array with leading comma)", () => {
    component.stringArray = ",not, an, array";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add an error to the error array and produce an empty array when when asked to split by a non int", () => {
    component.stringArray = "1,2,3";
    component.splitInt = 3.5;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add an error to the error array and produce an empty array when when asked to split by a negative int", () => {
    component.stringArray = "1,2,3";
    component.splitInt = -3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add an error to the error array and produce an empty array when asked to split by 0", () => {
    component.stringArray = "1,2,3";
    component.splitInt = 0;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 1 && newarray.length === 0).toBeTruthy();
  });

  it("it should add two errors to the error array and produce an empty array when supplied with a negative int and a non array", () => {
    component.stringArray = "not an array";
    component.splitInt = -3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 2 && newarray.length === 0).toBeTruthy();
  });

  it("it should clear the error array on successful split", () => {
    component.stringArray = "1,2,3";
    component.splitInt = -3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    component.stringArray = "1,2,3,4,5,6,7,8,9";
    component.splitInt = 3;
    newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(component.errors.length === 0 && newarray.length === 3).toBeTruthy();
  });

  it("it should split a size 9 array of numbers into 3 and produce 3 arrays of size 3,3,3", () => {
    component.stringArray = "1,2,3,4,5,6,7,8,9";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(newarray.length === 3 && newarray[0].length === 3 && newarray[1].length === 3 && newarray[2].length === 3).toBeTruthy();
  });

  it("it should split a size 9 array of words into 3 and produce 3 arrays of size 3,3,3", () => {
    component.stringArray = "one,two,thee,four,five,six,seven,eight,nine";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(newarray.length === 3 && newarray[0].length === 3 && newarray[1].length === 3 && newarray[2].length === 3).toBeTruthy();
  });

  it("it should split a size 8 array into 3 and produce 3 arrays of size 3,3,2", () => {
    component.stringArray = "1,2,3,4,5,6,7,8";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(newarray.length === 3 && newarray[0].length === 3 && newarray[1].length === 3 && newarray[2].length === 2).toBeTruthy();
  });

  it("it should split a size 0 array into 3 and produce 3 arrays of size 0,0,0", () => {
    component.stringArray = "";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(newarray.length === 3 && newarray[0].length === 0 && newarray[1].length === 0 && newarray[2].length === 0).toBeTruthy();
  });

  it("it should split a size 2 array into 3 and produce 3 arrays of size 0,0,2", () => {
    component.stringArray = "1,2";
    component.splitInt = 3;
    let newarray = component.splitStringArray(component.splitInt, component.stringArray);
    expect(newarray.length === 3 && newarray[0].length === 0 && newarray[1].length === 0 && newarray[2].length === 2).toBeTruthy();
  });

});
