'use client';
export default function ErrorWrapper({error}:{error :Error} ) {
  return <p>Oops!! {error.message}</p>
}