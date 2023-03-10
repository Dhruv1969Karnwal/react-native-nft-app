import { TouchableOpacity, Image,View, Text } from 'react-native'
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";


export const CircleButton = ({imgUrl , handlePress , ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props

    }}
    onPress={handlePress}
    >
    <Image 
    source={imgUrl}
    resizeMode='contain'
    style={{width: 24 , height: 24}}
    />
    </TouchableOpacity>
  )
}



export const RectangleButton = ({minWidth, fontSize, handlePress , ...props}) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...props
        }}
        onPress={handlePress}
        >
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
        }}>
            Place a bid
        </Text>
        </TouchableOpacity>
    )
  }
