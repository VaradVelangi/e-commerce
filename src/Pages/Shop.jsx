import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollection/NewCollection'
import { Newsletter } from '../Components/NewsLetter/Newsletter'

export const Shop = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollection/>
    <Newsletter/>
    </>
  )
}
