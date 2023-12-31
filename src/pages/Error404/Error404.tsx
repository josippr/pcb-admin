import React from "react";
import { styled } from "@mui/material";

const ErrorWrapper = styled("div")({
    margin: '0 auto',
    paddingTop: '500px',
    width: '100%',
    textAlign: 'center',
});

const ErrorTitle = styled("h1")({
    color: '#495580',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '100px',
    textTransform: 'capitalize',
})

const ErrorMessage = styled("p")({
    color: '#495580',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
})

function Error404() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Error 404</ErrorTitle>
            <ErrorMessage>Hm, it seems this page does not exist.</ErrorMessage>
        </ErrorWrapper>
    );
}

export default Error404;