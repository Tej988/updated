import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Container, Button, Box } from '@mui/material';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
               
                <Box textAlign='center' margin={50}>
                <h2>Please Login to Enter Dashboard</h2>
                    <Button variant='contained'>
                        My button
                    </Button>
                </Box>
            </button>
        )


    )
}

export default LoginButton