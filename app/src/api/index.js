import R from 'ramda'
//import request from 'superagent'
import axios from 'axios'

//import phones from './mockPhones'
import categories from './mockCategories'


var phones
 export const fetchPhones = async () => {
  try {
    const response = await axios.get('js/mock.json?ID=12345');
     phones = response.data.phones
    return phones;
  } catch (error) {
    console.error(error);
  }  
 }

var Morephones
 export const fetchMorePhones = async () => {
  try {
    const response = await axios.get('js/mockMorePhones.json');
     Morephones = response.data.phones
     phones = R.concat(Morephones,phones)
    return Morephones;
  } catch (error) {
    console.error(error);
  }  
 }

/*
export const fetchPhones = async () => {
  const {body} = await request.get(
  // 'http://www.mocky.io/v2/5b2c92602f00003400ebd2a6'
    'js/mock.json'
  )
  return body.phones  
}
*/

export const loadMorePhones = async () => {
  return new Promise(resolve => {
    resolve(Morephones)
  })
}
export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}
