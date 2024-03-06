import React from "react";
import ReactDOM from "react-dom/client";

//Creating components using Reactjs//

const Header = () => {
    return (
        <div id="nav">

            <div id='logo'>
                <img className="logo-img" src="https://themeforest.img.customer.envatousercontent.com/files/298661744/02_location.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e1cde9547670720ae689a7c12db57252"></img>
            </div>

            <div id='links'>
                <a href="#">Home</a>
                <a href="#">Cart</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>

        </div>
    )
};

//STEP-1 :- Get the api data of restaurants about name, cuisines, avgrating and many more... from swiggy and stored in in a const 

const resList = [

    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "22917",
                    "name": "Bangla Foods",
                    "cloudinaryImageId": "xquli5h001yj3gheoufz",
                    "locality": "Bangla Sahib Marg",
                    "areaName": "Connaught Place",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Street Food",
                        "Ice Cream",
                        "Pizzas",
                        "Pastas"
                    ],
                    "avgRating": 4.3,
                    "parentId": "16153",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=11474613~p=1~eid=0000018d-ee77-f0c5-1650-16c40010010b~srvts=1709102854341~83645",
                    "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 22:45:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=22917&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "330179",
                    "name": "Super Snacks",
                    "cloudinaryImageId": "fhmaimimq6fpszil8vln",
                    "locality": "Krishna Nagar",
                    "areaName": "Krishna Nagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Street Food"
                    ],
                    "avgRating": 4.2,
                    "parentId": "197476",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=11401351~p=2~eid=0000018d-ee77-f0c5-1650-16c500100204~srvts=1709102854341~83645",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 6.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "6.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            },
                            "textBased": {

                            },
                            "imageBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=330179&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "17835",
                    "name": "Behrouz Biryani",
                    "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
                    "locality": "Minto Road",
                    "areaName": "Connaught Place",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Beverages",
                        "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "1803",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "promoted": true,
                    "adTrackingId": "cid=11505963~p=3~eid=0000018d-ee77-f0c5-1650-16c600100331~srvts=1709102854341~83645",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=17835&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "14951",
                    "name": "Khan Chacha",
                    "cloudinaryImageId": "9e9a4f728e2bf1e69f325179d0addd45",
                    "locality": "Connaught Place",
                    "areaName": "Connaught Place",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Kebabs",
                        "Mughlai"
                    ],
                    "avgRating": 4.3,
                    "parentId": "548",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=11474111~p=4~eid=0000018d-ee77-f0c5-1650-16c700100424~srvts=1709102854341~83645",
                    "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "29 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 23:00:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=14951&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "443497",
                    "name": "EatFit",
                    "cloudinaryImageId": "a564ace38895abd960157ac2a76aaf2a",
                    "locality": "Laxmi Narain Street",
                    "areaName": "Paharganj",
                    "costForTwo": "₹270 for two",
                    "cuisines": [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani"
                    ],
                    "avgRating": 4.4,
                    "parentId": "76139",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "promoted": true,
                    "adTrackingId": "cid=11451261~p=5~eid=0000018d-ee77-f0c5-1650-16c80010051f~srvts=1709102854341~83645",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 23:45:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {

                            },
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "brand",
                                            "fontColor": "#7E808C"
                                        }
                                    }
                                ]
                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=443497&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "41648",
                    "name": "Jung Bahadur Kachori Wala (Old Delhi Original)",
                    "cloudinaryImageId": "qokddzim0w19rz6heik3",
                    "locality": "Jogiwari Road",
                    "areaName": "Chandni Chowk",
                    "costForTwo": "₹100 for two",
                    "cuisines": [
                        "Snacks"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "471623",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 18:29:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {

                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=41648&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        type: "restaurant",
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "56166",
                    "name": "Mehtas (Old Delhi Original)",
                    "cloudinaryImageId": "jfh1necyodxbhutskgpl",
                    "locality": "Netaji Subhash Marg",
                    "areaName": "Daryaganj",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Street Food",
                        "Desserts",
                        "Sweets"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "16726",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-02-28 22:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "UPTO ₹45"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=56166&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]


//STEP-2 :- Created props and passed the resData property and accessed the needed values accordingly.

const Rescards = (props) => {
    const { resData } = props;
    return (
        <div id='outer'>
            <div>
                <img className='outer-img'
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                        + resData.card.card.info.cloudinaryImageId} />
            </div>
            <div className='info' >
                <h1>{resData.card.card.info.name}</h1>
                <h4>{resData.card.card.info.cuisines}</h4>
                <h4>{resData.card.card.info.sla.deliveryTime + " minutes"}</h4>
                <h4>{resData.card.card.info.avgRating}</h4>
            </div>
        </div>
    )
};


//STEP-3 :- passed the const data in a js property called "resData" for rendering in cards and get the values from index values or use Map().

const Rescontainer = () => {
    return (

        <div id='res-grids'>
            <Rescards resData={resList[0]} />
            <Rescards resData={resList[1]} />
            <Rescards resData={resList[2]} />
            <Rescards resData={resList[3]} />
            <Rescards resData={resList[4]} />
            <Rescards resData={resList[5]} />
            <Rescards resData={resList[6]} />
        </div>

        // ================or==================

        // <div>
        //     {
        //         resList.map((restaurant) => (
        //             <Rescards key={restaurant.card.card.info.id} resData={restaurant} />
        //         ))
        //     }
        // </div>

    )
}


const Mainapp = () => {
    return (
        <div>
            <Header />
            {/* <Rescontainer /> */}
        </div>
    )
}

const app = ReactDOM.createRoot(document.getElementById('root'));

app.render(<Mainapp />);