import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch';
import { fetchMoviesDetails } from '@/services/api';

const MovieDetails = () => {
  const  { id } = useLocalSearchParams();
  const {data : movie , loading} = useFetch(() => fetchMoviesDetails(id as string));

  return (
    <View className='bg-primary flex-1'>
      <ScrollView contentContainerStyle={{paddingBottom : 80}}>
        <View>
          <Image  source={{uri : `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}} className='w-full h-[550px]' resizeMode='stretch' />
        </View>

        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className='flex-row items-center gap-x-1 mt-2'></View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MovieDetails