import { Car } from "@/types";
import axios from "axios";

interface ResponseCarsAPI {
  cars: Array<Car>,
  message: string
}

export const fetchCars = async (manufacturer: string): Promise<ResponseCarsAPI> => {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
  const options = {
    method: 'GET',
    params: { make: manufacturer },
    headers: {
      'X-RapidAPI-Key': '7df9b79d3fmsh7a12bd75f217c87p1ec50ajsn092588980be5',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  }

  const res = await axios.get(url, options)

  const numberOfCars = res.data.length

  const message = numberOfCars === 0 ? 'No cars found' : `We found ${numberOfCars} car(s)`
  return { cars: [...res.data], message: message }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: Car, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`
}
