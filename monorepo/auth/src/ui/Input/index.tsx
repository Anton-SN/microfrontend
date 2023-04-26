import React from 'react';

interface Props {
    onChange: (event: React.SyntheticEvent) => void,
}
export const Input: React.FC<Props> = ({ onChange }) => {
    return <input type="text" onChange={onChange} />
}
