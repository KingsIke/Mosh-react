// import { categories } from '../../App'
import categories from '../categories.ts'

interface Props {
    onSelectCategory: (category: string) => void
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {



    return (
        <>
            <select className='form-select' onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Groceries">Groceries</option>
                {categories.map((category) => {
                    return (
                        <>
                            <option value={category} key={category}>{category}</option>
                        </>
                    )
                })}

            </select>

        </>
    )
}
