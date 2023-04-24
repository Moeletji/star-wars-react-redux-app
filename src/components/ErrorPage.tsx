import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

interface Props {
  errorCode: number;
}

function ErrorPage({ errorCode }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      {errorCode === 404 ? (
        <h1 className="text-center">404 Not Found</h1>
      ) : (
        <h1 className="text-center">500 Internal Server Error</h1>
      )}
      <p className="text-center">Sorry, an error has occurred.</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}

export default ErrorPage;
