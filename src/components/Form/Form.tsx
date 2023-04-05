import { FieldValues, useForm } from 'react-hook-form'
// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod'

// const schema = z.object({
//     name: z.string().min(3),
//     age: z.number().min(18)
// })

// type FormData = z.infer<typeof schema>

export default function Form() {
    //For UseForm
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    //     {
    //     resolver: zodResolver(schema)
    // }

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }




    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name
                    </label>
                    <input {...register('name', { required: true, minLength: 3 })} id='name' type="text" className="form-control" />
                    {errors.name?.type === 'required' && (
                        <p className='text-danger'>{errors.name.message}</p>
                    )}


                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age
                    </label>
                    <input {...register('age')} id='age' type="number" className="form-control" />
                    {errors.age?.type === 'required' && (
                        <p className='text-danger'>{errors.age.message}</p>
                    )}


                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </>
    )
}






 //import React, { FormEvent, useRef, useState } from 'react'
// import { FieldValues, useForm } from 'react-hook-form'
// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod'

// const schema = z.object({
//     name: z.string().min(3),
//     age: z.number().min(18)
// })

// type FormData = z.infer<typeof schema>

// export default function Form() {
//     //For UseForm
//     const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
//         resolver: zodResolver(schema)
//     })
//     // console.log(register('nam e'))
//     // console.log(formState.errors)

//     const onSubmit = (data: FieldValues) => {
//         console.log(data)
//     }


//     // For useRef
//     // const nameRef = useRef<HTMLInputElement>(null)
//     // const ageRef = useRef<HTMLInputElement>(null)
//     // const person = { name: '', age: '' }


//     //FOR useState and onChange
//     // const [name, setName] = useState('')
//     // const [age, setAge] = useState('')
//     // const handleName = (e: any) => {
//     //     setName(e.target.value)
//     // }
//     // const handleAge = (e: any) => {
//     //     setAge(e.target.value)
//     // }

//     // const handleSubmit = (event: FormEvent) => {
//     //     event.preventDefault()

//     // if (nameRef.current !== null) {
//     //     person.name = nameRef.current.value
//     // }
//     // if (ageRef.current !== null) {
//     //     person.age = ageRef.current.value
//     // }
//     // console.log(person)

//     // for UseState
//     // const form = { name, age }
//     // console.log(form)
//     // }
//     return (
//         <>
//             {/* <form onClick={handleSubmit}> */}
//             <form onSubmit={handleSubmit(onSubmit)}>

//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name
//                     </label>
//                     <input {...register('name')} id='name' type="text" className="form-control" />
//                     {errors.name?.type === 'required' && (
//                         <p className='text-danger'>{errors.name.message}</p>
//                     )}

//                     {/* <input ref={nameRef} id='name' type="text" className="form-control" value={name} onChange={handleName} /> */}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="age" className="form-label">Age
//                     </label>
//                     <input {...register('age')} id='age' type="number" className="form-control" />
//                     {errors.age?.type === 'required' && (
//                         <p className='text-danger'>{errors.age.message}</p>
//                     )}

//                     {/* <input ref={ageRef} id='age' type="number" className="form-control" value={age} onChange={handleAge} /> */}
//                 </div>
//                 <button className="btn btn-primary" type='submit'>Submit</button>
//             </form>
//         </>
//     )
// }

