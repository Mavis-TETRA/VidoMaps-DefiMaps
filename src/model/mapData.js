/* eslint-disable prettier/prettier */
const ImagesLogo = [
    { image: require("../../drawble/drawbleImg/locationicon.jpg") },
    
];

const Images = [
    { image: require("../../drawble/drawbleImg/banner_gh.jpg") },
    { image: require("../../drawble/drawbleImg/banner_gh.jpg") },
    { image: require("../../drawble/drawbleImg/banner_gh.jpg") },
    { image: require("../../drawble/drawbleImg/banner_gh.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 10.852250,
        longitude:  106.629583
      },
      title: "Amazing Food Place",
      description: "This is the best food place",
      imagelogo: ImagesLogo[0].image,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      //10.852058, 106.629597
      coordinate: {
        latitude: 10.852058,
        longitude: 106.629597,
      },
      title: "Second Amazing Food Place",
      description: "This is the second best food place",
      imagelogo: ImagesLogo[0].image,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      //10.851990, 106.629371
      coordinate: {
        latitude: 10.851990,
        longitude: 106.629371,
      },
      title: "Third Amazing Food Place",
      description: "This is the third best food place",
      imagelogo: ImagesLogo[0].image,
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      //10.852191, 106.629300
      coordinate: {
        latitude: 10.852191,
        longitude:106.629300,
      },
      title: "Fourth Amazing Food Place",
      description: "This is the fourth best food place",
      imagelogo: ImagesLogo[0].image,
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      //10.852151, 106.629843
      coordinate: {
        latitude: 10.852151,
        longitude: 106.629843,
      },
      title: "Fifth Amazing Food Place",
      description: "This is the fifth best food place",
      imagelogo: ImagesLogo[0].image,
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];