import { useEffect, useState } from "react"
// interface Props {
//     category: string
// }
export const ProductList = (
    { category }: { category: string }
) => {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log(`Fetching Products from `, category)
        setProducts(['Clothing', 'Household'])
    }, [category])
    return (

        <h1>
            Product adding
        </h1>

    )
}