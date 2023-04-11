import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'


export default function Gross() {
    return (
        <>
            <form action="">

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <input type="text" name="" id="" />
                </div>

                <label htmlFor="" className="form-label">Amount</label>
                <input type="number" name="" id="" />

                <label htmlFor="" className="form-label">Category</label>
                <select name="" id=""></select>

            </form>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </>
    )
}
