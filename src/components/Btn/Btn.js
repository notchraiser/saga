import React from 'react';
import Button from '@material-ui/core/Button';
// import './styles.css';

const Btn = ({children, loading, ...props}) => {
    return (
        <Button variant="contained" color={loading? "default": "primary"} disabled={loading} {...props}>
            {loading ? 'Loading ... ': children}
        </Button>
    )
}

export default Btn;
