import { useEffect } from 'react';

export function useSEO (
  { title, desciption }:
  { title: string, desciption: string }
) {

  useEffect(() => {
    document.title = title
    document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', desciption)
  }, [title, desciption])
}