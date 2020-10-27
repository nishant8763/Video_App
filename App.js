import React from 'react';
import { NavigationContainer,  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import DrawerNavigation from "./screens/navigation/DrawerNavigation";
import splash from "./screens/splash/splash";
import popularMovies from "./screens/movies/popular_movies";
import moviedetails from "./screens/movies/moviedetail";
import allMoviesScreen from "./screens/movies/all_movies";
import moreLikeThis from "./screens/movies/more_like_this";
import PopularShows from "./screens/shows/popular_shows";
import trailerExtras from "./screens/movies/Trailers_extras";
import seasons from "./screens/shows/seasons";
import showDetails from "./screens/shows/shows_detail";
import seasonsDetails from "./screens/shows/season_details";

const stack = createStackNavigator();



export default function App() {

  return (    
    <NavigationContainer> 
      <stack.Navigator >
      <stack.Screen  name="splash" component={splash} options={{headerShown:false}}/>
      <stack.Screen  name="DrawerNavigation" component={DrawerNavigation} options={{headerShown:false}} />
      <stack.Screen  name="popularMovies" component={popularMovies} options={{headerShown:false}}/>
      <stack.Screen  name="moviedetails" component={moviedetails} options={{headerShown:false}}/>
      <stack.Screen  name="allMoviesScreen" component={allMoviesScreen} options={{headerShown:false}}/>
      <stack.Screen  name="moreLikeThis" component={moreLikeThis} options={{headerShown:false}}/>
      <stack.Screen  name="PopularShows" component={PopularShows} options={{headerShown:false}}/>
      <stack.Screen  name="trailerExtras" component={trailerExtras} options={{headerShown:false}}/>
      <stack.Screen  name="seasons" component={seasons} options={{headerShown:false}}/>
      <stack.Screen name="showDetails" component={showDetails} options={{headerShown:false}} />
      <stack.Screen name="seasonsDetails" component={seasonsDetails} options={{headerShown:false}} />
    </stack.Navigator>
    </NavigationContainer>
  );

  }