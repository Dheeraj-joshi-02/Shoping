import React from 'react'
import axios, { Axios } from 'axios'

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
})

export const getInstance = () => {
  return instance.get("products")
}
