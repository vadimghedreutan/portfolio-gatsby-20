import {useState, useEffect} from 'react'

const useGithubData = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState()
  const [url] = useState('https://api.github.com/users/vadimghedreutan/repos?page=1&per_page=10')

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError();
        console.log('Fetching Data');
        let data = await fetch(url)
          .then(res => res.json())

            data = data
            .map(({
              id, name, description, homepage, html_url
            }) => ({
              id, name, description, homepage, html_url
            }))

        setData(data);
      } catch (error) {
        setError(error)
      }
      setLoading(false);
    }
    fetchData();

  }, [url]);

  return {
    data,
    isLoading,
    isError
  }
}

export default useGithubData