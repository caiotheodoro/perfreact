import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

type Results = {
  totalPrice: number;
  data: any[];
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>(
    {
      totalPrice: 0,
      data: []
    }
  )
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()


    if(!search.trim()){
      return;
    }
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const product = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted:  formatter.format(product.price)
      }
    })


    const totalPrice =  data.reduce((acc, curr) => acc + curr.price, 0)
    setResults({data: product, totalPrice})
  }


  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div >
      <h1>search</h1>
      <form onSubmit={handleSearch}>
        <input 
        type="text"
        value={search}
        placeholder="search"
        onChange={e => setSearch(e.target.value)}
        />
        </form>
      <SearchResults
          results={results.data}
          onAddToWishList={addToWishList}
          totalPrice={results.totalPrice}
          />
    </div>
  )
}
