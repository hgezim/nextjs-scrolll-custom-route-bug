import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default ({url: {query}}) => {
  let router = useRouter();
  console.log("query L7:", query);
  return (
    <>
    <button
              onClick={() => {
                router.push('/recipes/[filter]', '/recipes/diet-halal?cuisine=greek', { query: {cuisine: 'greek'} });
              }}
            >
              95
            </button>
    </>
  );
};
