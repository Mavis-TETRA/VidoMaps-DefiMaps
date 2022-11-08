/* eslint-disable prettier/prettier */

// lat and long center building : 10.85182111358613, 106.62807166628698

//10.852168
const LATITUDE_LEFT_TOP = 10.852168; 
const LONGITUDE_LEFT_TOP = 106.627799; 

const LATITUDE_RIGHT_TOP = 10.852102;
const LONGITUDE_RIGHT_TOP = 106.628256;

// 10.851526, 106.627799
const LATITUDE_LEFT_BOTTOM = 10.851526;//point
const LONGITUDE_LEFT_BOTTOM = 106.627799;//point

//   106.62825939654574
const LATITUDE_RIGHT_BOTTOM = 10.851526;
const LONGITUDE_RIGHT_BOTTOM = 106.628259;

const LATITUDE_DISTANCE_LEFT = (LATITUDE_LEFT_TOP - LATITUDE_LEFT_BOTTOM);
const LONGITUDE_DISTANCE_BOTTOM = (LONGITUDE_RIGHT_BOTTOM - LONGITUDE_LEFT_BOTTOM);

// Detail
const LATITUDE_DISTANCE_RIGHT = LATITUDE_DISTANCE_LEFT;
const LONGITUDE_DISTANCE_TOP = LONGITUDE_DISTANCE_BOTTOM ;

//10.851655221139566, 106.62816684009636

const LAT = 10.851655221139566
const LONG =  106.62816684009636;


// Building vido

const PERCENT_OF_BUILDING_DEVIATION = 10
const DELAY_TIME = 5000

//10.852084085012642, 106.62812835441531
const LATITUDE_LEFT_TOP_VIDO = 10.852084; 
const LONGITUDE_LEFT_TOP_VIDO = 106.628097; 

const LATITUDE_RIGHT_TOP_VIDO = 10.852102;
const LONGITUDE_RIGHT_TOP_VIDO = 106.628256;

// 10.851549, 106.628097
const LATITUDE_LEFT_BOTTOM_VIDO = 10.851549;//point
const LONGITUDE_LEFT_BOTTOM_VIDO = 106.628097;//point

//   10.851545944683382, 106.62821782254615
const LATITUDE_RIGHT_BOTTOM_VIDO = 10.851549;
const LONGITUDE_RIGHT_BOTTOM_VIDO = 106.628217;

const LATITUDE_DISTANCE_LEFT_VIDO = (LATITUDE_LEFT_TOP_VIDO - LATITUDE_LEFT_BOTTOM_VIDO);
const LONGITUDE_DISTANCE_BOTTOM_VIDO = (LONGITUDE_RIGHT_BOTTOM_VIDO - LONGITUDE_LEFT_BOTTOM_VIDO);

// Detail

const LATITUDE_DISTANCE_RIGHT_VIDO = LATITUDE_DISTANCE_LEFT_VIDO;
const LONGITUDE_DISTANCE_TOP_VIDO = LONGITUDE_DISTANCE_BOTTOM_VIDO;

const listFloor = [
  {
      floor: "floor0",
      detail: "Tầng Hầm",
      image: require("../../drawble/SoDoBoTri/SodoBotriHam.jpg")
    },
    {
      floor: "floor1",
      detail: "Tầng 1",
      image: require("../../drawble/SoDoBoTri/SodoBotri1-1.jpg")
    },
    {
      floor: "floorYard",
      detail: "Sân Trước",
      image: require("../../drawble/SoDoBoTri/SodoBotriSan.jpg")
    },
    {
      floor: "floor2",
      detail: "Tầng 2",
      image: require("../../drawble/SoDoBoTri/SodoBotri2.jpg")
    },
    {
      floor: "floor3",
      detail: "Tầng 3",
      image: require("../../drawble/SoDoBoTri/SodoBotri3.jpg")
    },
    {
      floor: "floor4",
      detail: "Tầng 4",
      image: require("../../drawble/SoDoBoTri/SodoBotri4.jpg")
    },
    {
      floor: "floor5",
      detail: "Tầng 5",
      image: require("../../drawble/SoDoBoTri/SodoBotri5.jpg")
    },
    {
      floor: "floor6",
      detail: "Tầng 6",
      image: require("../../drawble/SoDoBoTri/SodoBotri6.jpg")
    },
    {
      floor: "floor7",
      detail: "Tầng 7",
      image: require("../../drawble/SoDoBoTri/SodoBotri7.jpg")
    },
    {
      floor: "floor8",
      detail: "Tầng 8",
      image: require("../../drawble/SoDoBoTri/SodoBotri8.jpg")
    },
]

const data = [
  {key:'0',value:'Tầng Hầm'},
  {key:'1',value:'Tầng 1'},
  {key:'2',value:'Sân Trước'},
  {key:'3',value:'Tầng 2'},
  {key:'4',value:'Tầng 3'},
  {key:'5',value:'Tầng 4'},
  {key:'6',value:'Tầng 5'},
  {key:'7',value:'Tầng 6'},
  {key:'8',value:'Tầng 7'},
  {key:'9',value:'Tầng 8'},
];