import SearchForm from '../components/SearchForm';
import StartupCard from '../components/StartupCard';
import { StartupCardType } from '../model';
type searchParams = {
  searchParams: Promise<{ query?: string }>;
};

export default async function Home({ searchParams }: searchParams) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      author: {
        _id: 1,
        name:"John Doe",
      },
      _id: 1,
      description: 'This is a description',
      image:
        'https://unsplash.com/photos/new-york-city-skyline-at-sunset-is-stunning-kNNJAN2jpTI',
      category: 'Robots',
      title: 'We Robots',
    },
  ];
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post}></StartupCard>
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
