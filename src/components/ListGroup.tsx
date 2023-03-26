import { MouseEvent } from "react";

const ListGroup = () => {

    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    const handleClick = (e: MouseEvent) => {
        console.log(e.target)
    }
    return (
        <>
            <h1>List-Group</h1>

            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item) => (

                    <li
                        className="list-group-item"
                        key={item}
                        value={item}
                        onClick={handleClick}> {item}</li>

                ))}
            </ul>
        </>
    );
}

export default ListGroup;