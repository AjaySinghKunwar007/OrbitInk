import React from 'react'
import { Container } from '../components'

function Loader({text="Loading post..."}) {
  return (
    <div className=" h-screen w-full">
            <Container>
              <div className="flex flex-col items-center justify-center h-[80vh] w-full">
                <div
                  className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                  role="status"
                  aria-live="polite"
                ></div>
                <p className="mt-2 text-lg text-gray-600">{text}</p>
              </div>
            </Container>
          </div>
  );
}

export default Loader