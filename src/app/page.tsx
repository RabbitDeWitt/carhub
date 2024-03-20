import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const { cars, message } = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 12,
    model: searchParams.model || ''
  })
  console.log(cars)

  const isDataEmpty = cars.length < 1
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-6 max-w-[1440px] mx-auto" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h2 className="text-4xl font-extrabold">
            Car Catalogue
          </h2>
          <p>
            Explore out cars you might like
          </p>
        </div>

        <div className='mt-12 w-full flex justify-between items-center flex-wrap gap-5'>
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter
              title='fuel'
              option={fuels}
            />
            <CustomFilter
              title='year'
              option={yearsOfProduction}
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {cars.map((car, i) => (
                <CarCard
                  key={car.model + i}
                  car={car}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{message}</p>
          </div>
        )}
      </div>

    </main>
  );
}
