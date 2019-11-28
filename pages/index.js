import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default () => {
  let router = useRouter();
  return (
    <>
    <h1>Scrolls to top</h1>
    <ul>
      {new Array (100).fill (0).map ((x, i) => {
        if (i === 95) {
          return (
            <button
              onClick={() => {
                router.push('/a?query=95');
              }}
            >
              95
            </button>
          );
        }
        return <li>{i}</li>;
      })}
    </ul>
    </>
  );
};
