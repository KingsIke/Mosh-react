import React from 'react';
import ReactLoading from 'react-loading';

interface Props{
    type : string
    color: string
}
const LoadingIcon = ({ type, color }:Props) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
);

export default LoadingIcon;
