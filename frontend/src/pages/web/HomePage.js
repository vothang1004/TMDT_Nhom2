import { Box, Stack } from '@mui/material';
import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

function HomePage() {
    return (
        <>
        <Box>
            <Stack>
                <RouterLink to={'/'}>HomePage</RouterLink>
                <RouterLink to={'/login'}>Login page</RouterLink>
                <RouterLink to={'/register'}>Register page</RouterLink>
            </Stack>
        </Box>
        </>
    )
}

export default HomePage;
