import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args: any) => fetch(args).then((res) => res.json());

const Swr = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR('http://localhost:3001/login', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {countries &&
        countries.map((country: any, index: number) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
};

export default Swr;