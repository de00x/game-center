import { editUserInfo, editUserPassword, editDeliveryAddress } from "./put";
import { deleteAddress, deleteAccount } from "./delete";
import {
  getAllProductBySearch,
  getCoincidencePass,
  getDeliveryAddress,
  getPersonalData,
  getBeverages,
  getCornDogs,
  getReviews,
  getPizzas,
  getStocks,
  getRolls,
  getSushi,
  getSets,
  getGamePages,
} from "./get";
import {
  createDeliveryAddress,
  createPersonalData,
  productToBasket,
  createReview,
  createUser,
  authorize,
} from "./post";

export const Controller = {
  get: {
    getAllProductBySearch,
    getDeliveryAddress,
    getCoincidencePass,
    getPersonalData,
    getBeverages,
    getCornDogs,
    getReviews,
    getPizzas,
    getStocks,
    getRolls,
    getSushi,
    getSets,
    getGamePages,
  },
  delete: {
    deleteAddress,
    deleteAccount,
  },
  put: {
    editUserInfo,
    editUserPassword,
    editDeliveryAddress,
  },
  post: {
    authorize,
    createUser,
    createReview,
    productToBasket,
    createPersonalData,
    createDeliveryAddress,
  },
};
