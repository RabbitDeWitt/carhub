import { Car, FilterProps } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ResponseCarsAPI {
  cars: Array<Car>,
  message: string
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

export const fetchCars = async (filters: FilterProps): Promise<ResponseCarsAPI> => {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
  const { manufacturer, model, fuel, limit, year } = filters

  const options = {
    method: 'GET',
    params: {
      make: manufacturer,
      model: model,
      fuel: fuel,
      limit: limit,
      year: year
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  }

  const res = await axios.get(url, options)

  const numberOfCars = res.data.length

  const message = numberOfCars === 0 ? 'No cars found' : `We found ${numberOfCars} car(s)`
  return { cars: [...res.data], message: message }
}

export const updateSearchParams = (model: string, manufacturer: string): string => {
  const searchParams = new URLSearchParams(window.location.search)

  if (model) {
    searchParams.set('model', model)
  } else {
    searchParams.delete('model')
  }

  if (manufacturer) {
    searchParams.set('manufacturer', manufacturer)
  } else {
    searchParams.delete('manufacturer')
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}


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
